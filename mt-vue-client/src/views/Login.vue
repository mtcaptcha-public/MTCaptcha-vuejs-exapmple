<template>
  <div>
    <h2>Login</h2>
    <b-alert variant="danger" v-if="msg" show dismissible>
        {{ msg }}
    </b-alert>
    <div class="form-group">
        <label for="username">Username</label>
        <input type="text" placeholder="Username" class="form-control"  v-model="username" />
    </div>
    <div class="form-group">
        <label htmlFor="password">Password</label>
        <input type="text" placeholder="Password" class="form-control"  v-model="password" />
    </div>
    <div class="form-group">
        <label htmlFor="password">Captcha</label>
        <div class="mtcaptcha" id="login-captcha"/>
    </div>
    <div class="form-group">
        <button class="btn btn-primary" @click="login" value="Login">Login</button>
    </div>
  </div>
</template>
<script>
import AuthService from '@/services/AuthService.js';
export default {
  data() {
    return {
      username: '',
      password: '',
      verifiedtoken: '',
      msg: ''
    };
  },
  created: function () {
      this.renderCaptchaOnload()
  },
  methods: {
    renderCaptchaOnload: function(){
        window.mtcaptchaConfig.renderQueue.push('login-captcha');
    },
    async login() {
      try {
        const credentials = {
          username: this.username,
          password: this.password,
          verifiedtoken: window.mtcaptcha.getVerifiedToken()
        };
        const response = await AuthService.login(credentials);
        this.msg = response.msg;
        const token = response.token;
        const user = response.user;
        this.$store.dispatch('login', { token, user });
        this.$router.push('/');
      } catch (error) {
        this.renderCaptchaOnload()
        this.msg = error.response.data.msg;
      }
    }
  }
};
</script>