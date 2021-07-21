# MTCaptcha-vuejs-exapmple
Sample Implementation of MTCaptcha for  VueJS

## MTCaptcha VueJS Application 

```
cd mt-vue-client
```
## Project setup

Install Node Modules via NPM
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
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


