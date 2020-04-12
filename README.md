# MTCaptcha-vuejs-exapmple
Sample Implementation of MTCaptcha for  VueJS


## MTCaptcha Express API

```
cd mt-npm-api/
```

Install Node Modules 

```
npm install
```

Start API
```
npm run dev
```

API will be up at http://localhost:3000/

## MTCaptcha VueJS Application 

```
cd mt-vue-client
```

Install Node Modules via NPM
```
npm install
```

Start VueJS Application

```
npm run serve
```
Application will be up at http://localhost:8080/

----
Inorder to run the application Register your domain at MTCaptcah ( https://admin.mtcaptcha.com/)
Get the Site key and update 
```
mt-vue-client/src/App.vue
```

Need to update Site Private key on API to do backend Captcha Validation 

```
mt-npm-api/routes/router.js
```

Once the application is up go to 
http://localhost:8080/login

To see login page 

Test user name/password = test/test

