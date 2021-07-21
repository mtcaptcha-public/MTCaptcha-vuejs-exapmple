<script>
window.mtcaptchaConfig = {
    "sitekey": "<MT Sitekey>", // Get the site key from Sites page of MTCaptcha admin site 
    "widgetSize": "mini",
    "theme": "overcast",
    "render": "explicit",
    "renderQueue": []
};
// console.log(mtcaptchaConfig);

(
  function(){
    var mt_service = document.createElement('script');
    mt_service.async = true;
    mt_service.src = 'https://service.mtcaptcha.com/mtcv1/client/mtcaptcha.min.js';
    (
      document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]
    ).appendChild(mt_service);
    var mt_service2 = document.createElement('script');
    mt_service2.async = true;
    mt_service2.src = 'https://service2.mtcaptcha.com/mtcv1/client/mtcaptcha2.min.js';
    (
      document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]
    ).appendChild(mt_service2);
  }
)();
</script>
<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">MTCaptcha Vue Demo</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item :to="{ path: '/' }">Home</b-nav-item>
        <b-nav-item :to="{ path: '/about' }" >About</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <div class="jumbotron">
      <div class="container">
          <div class="row">
            <div class="col-sm-6 offset-sm-3">
                <router-view></router-view>
            </div>
          </div>
      </div>
  </div>
</div>
</template>


