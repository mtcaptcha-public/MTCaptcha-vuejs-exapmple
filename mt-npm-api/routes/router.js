// routes/router.js
const express = require('express');
const router = express.Router();
const MTCaptchaLib = require('../lib/MTCaptchaLib').MTCaptchaLib;
const jwt = require('jsonwebtoken');
const userMiddleware = require('../middleware/user.js');

router.post('/login', (req, res, next) => {

  if(req.body.password != "test" || req.body.username != "test"){
    return res.status(401).send({
      msg: 'Username or password is incorrect!'
    });
  }
  if(req.body.verifiedtoken == ""){
    return res.status(401).send({
      msg: 'Captcha is required!'
    });
  }
  // Add your site private key here, you can get it from the sites page of MTCaptcha admin site.
  const mtcapInstance = new MTCaptchaLib("<MTPrivate Kye>");
  mtcapInstance.validateTokenDetail(req.body['verifiedtoken'], function (tokenValidationResponse) {
    if(tokenValidationResponse.success){
      const token = jwt.sign({
          username: "MTCaptcha",
          userId: 1
        },
        'SECRETKEY', {
          expiresIn: '7d'
        }
      );
      return res.status(200).send({
        msg: 'Logged in!',
        token,
        user: {username:"MTCaptcha"}
      });
    }else{
      var captchaErrorMsg = {
        'token-expired' : 'The token has expired.',
        'token-duplicate-cal' : 'The token has been verified already.',
        'bad-request' : 'The request is invalid or malformed.',
        'missing-input-privatekey' : '`privatekey` parameter is missing',
        'missing-input-token' : ' ‘token’ parameter is missing.',
        'invalid-privatekey' : 'The private key is invalid or malformed.',
        'invalid-token' : 'The token parameter is invalid or malformed.',
        'invalid-token-faildecrypt' : 'The token parameter is invalid or malformed.',
        'privatekey-mismatch-token' : 'The token and the privatekey does not match.',
        'expired-sitekey-or-account': 'The sitekey/privatekey is no longer valid due to expiration or account closure.',
        'network-error' : 'Something went wrong!',
        'unknown-error' : 'Something went wrong!'
      }
      return res.status(401).send({msg: captchaErrorMsg[tokenValidationResponse.fail_codes[0]]});
    }
  });


});

router.get('/secret-route', userMiddleware.isLoggedIn, (req, res, next) => {
  res.send('This is the secret content. Only logged in users can see that!');
});


module.exports = router;