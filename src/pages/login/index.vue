<template>
  <div class="login">
    <div class="register-head">
      <div class="head-back">
          <v-touch @tap="handleTap()" tag="div">
             <span>&lt;</span>
          </v-touch>
       
      </div>
      <div class="head-titile">登录摩天轮业务</div>
    </div>
  
    <div class="user-container">
      <div class="username">
        <input type="text" placeholder="请输入账号" />
      </div>
      <div class="pwd">
        <input type="text" placeholder="请输入密码" />
      </div>
    </div>
    <div class="login-btn-wrapper">
      <div class="login-btn">登录</div>
      <div class="login-tip">
        未注册过的手机号将自动创建摩天轮账号，且代表您已同意
        <a href="javascript:void(0);" class="agree-ling">《摩天轮用户隐私政策》</a>
        <a href="javascript:void(0);" class="agree-ling">《第三方商品平台交易服务协议》</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  methods:{
    handleTap(){
        this.$router.push("/shouye");
    }
  }
};
</script>
<style lang="scss">
.register-head {
  height: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font: size 20px;
  position: relative;
  border-bottom: 1px solid #eaeaeb;
}
.head-back {
  position: absolute;

  margin-left: 0.12rem;
  top: 0;
  left: 0;
  line-height: 0.6rem;
}
.head-title {
  margin: 0 auto;
}
.user-container {
  width: 80%;
  margin: 0 auto;
  margin-top: 0.3rem;
  font-size: 0.16rem;
  line-height: 0.16rem;
}
.username {
  margin-top: 0.1rem;
  width: 100%;
  border-bottom: 1px solid #eaeaeb;
  padding-bottom: 0.1rem;

  display: flex;
}
.username input {
  height: 0.3rem;
  line-height: 0.3rem;

  flex: 1;
  border: none;
  outline: 0;
  color: #c5c5c5;
  font-size: 0.16rem;
  width: 1rem;
}
.pwd {
  margin-top: 0.1rem;
  width: 100%;
  border-bottom: 1px solid #eaeaeb;
  padding-bottom: 0.1rem;

  display: flex;
}
.pwd input {
  height: 0.3rem;
  line-height: 0.3rem;

  flex: 1;
  border: none;
  outline: 0;
  color: #c5c5c5;
  font-size: 0.16rem;
  width: 1rem;
}
.login-btn-wrapper {
  width: 80%;
  margin: 0 auto;
  margin-top: 0.4rem;
}
.login-btn {
  height: 0.366rem;
  line-height: 0.366rem;
  color: #fff;
  text-align: center;
  font-size: 0.16rem;
  border-radius: 0.183rem;
  background-image: linear-gradient(278deg, #ff1d41, #ee0e87);
}
.agree-link {
  color: #006bff;
}
.login-tip {
  padding-top: 0.15rem;
  color: #95949d;
  font-size: 0.12rem;
}
</style>