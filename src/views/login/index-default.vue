<template>
  <div class="login-container">
    <div class="title">
      {{ sysTitle }}
    </div>
    <img
      class="img-wrap img-wrap1"
      src="@/views/login/img/triangle1.png"
      alt="icon"
    >
    <img
      class="img-wrap img-wrap2"
      src="@/views/login/img/triangle1.png"
      alt="icon"
    >
    <img
      class="img-wrap img-wrap3"
      src="@/views/login/img/triangle1.png"
      alt="icon"
    >
    <img
      class="img-wrap img-wrap4"
      src="@/views/login/img/triangle1.png"
      alt="icon"
    >
    <img
      class="img-wrap computer"
      src="@/views/login/img/computer.png"
      alt="icon"
    >

    <section class="login-content center">
      <el-form
        ref="loginForm"
        :model="loginForm"
        :rules="loginrules"
        class="loginForm"
      >
        <el-form-item prop="username">
          <i class="el-icon-user" />
          <el-input
            v-model="loginForm.username"
            type="username"
            auto-complete="on"
          />
        </el-form-item>
        <el-form-item prop="password">
          <i class="el-icon-lock" />
          <el-input
            v-model="loginForm.password"
            type="password"
            auto-complete="on"
            @keydown.native.enter="tologinForm('loginForm')"
          />
        </el-form-item>
        <el-form-item>
          <el-button
            class="loginbutton"
            type="primary"
            @click="tologinForm('loginForm')"
          >
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </section>
  </div>
</template>

<script>
import loginMixins from './mixin'
export default {
  mixins: [loginMixins]
}
</script>

<style lang="scss">
@import "~@/styles/scss/_mixins";
.login-container{
  .el-input{
    width: 80%;
    line-height: 40px;
  }
  .el-form-item__content{
    display: flex;
    justify-content: center;
  }
  .el-form-item{
    margin-top: 2rem;
  }
  .el-form-item__error{
    left: 80px;
  }
  .el-icon-user,.el-icon-lock{
    line-height: 40px;
    font-size: 26px;
    text-align: center;
    color: $main-color;
    width: 10%;
  }
}
</style>
<style lang="scss" scoped>
@import "~@/styles/scss/_mixins";
.login-container {
  background-color: #fff;
  background-image: url(./img/mask.png);
  background-size: 100% 100%;
  min-height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
  .title{
    display: flex;
    align-items: center;
    font-size: 30px;
    color: #fff;
    letter-spacing: 3px;
    padding-left: 8rem;
  }
  .img-wrap{
    position: absolute;
  }
  .img-wrap1{
    bottom: 9.5rem;
    left: 11rem;
    transform: scale(1.5);
  }
  .img-wrap2{
    bottom: 5rem;
    left: 4rem;
    transform: scale(1.2);
  }
  .img-wrap3{
    top: 8.5rem;
    right: 22rem;
    transform: scale(1);
  }
  .img-wrap4{
    top: 4rem;
    right: 19.5rem;
    transform: scale(0.6);
  }
  .computer{
    bottom: 2.5rem;
    right: 0;
  }
  .login-content {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    z-index: 1;
    .loginForm {
      position: relative;
      background-color: #fff;
      border-radius: .8rem;
      width: 27rem;
      height: 21rem;
      max-width: 460px;
      max-height: 340px;
      padding: 2rem 2rem 0 2rem;
      margin-left: 8rem;
      margin-bottom: 4rem;
      overflow: hidden;
      .loginbutton {
        width: 70%;
        border-radius: 1px;
        background:$main-color;
        border-radius: 0.5rem;
        margin-left: 1.6rem;
        margin-top: .5rem;
        cursor: pointer;
        color: #fff;
        font-size: 1.2rem;
      }
    }
  }
}
</style>
