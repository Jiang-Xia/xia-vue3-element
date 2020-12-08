<template>
  <div class="login-container">
    <section class="img-wrap">
      <img
        src="./img/logo_szdermyy_white.png"
        alt=""
      >
    </section>
    <section class="login-content">
      <h2 class="title">
        {{ sysTitle }}
      </h2>
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
  background-image:linear-gradient(to right, #1DE4FF, #08D8BE);
  background-size: 100% 100%;
  min-height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
  .img-wrap{
    img{
      height: 100%;
      width: 100%;
    }
    position: absolute;
    top: 50%;
    left: 13.5rem;
    width: 31.65rem;
    height: 13.8rem;
    transform: translate(0, -50%);
  }
  .title{
    margin-top: .5rem;
    text-align: center;
    font-size: 1.5rem;
    color: rgba(0, 0, 0, 0.5);
    font-weight: 600;
    letter-spacing: 3px;
  }
  .computer{
    bottom: 2.5rem;
    right: 0;
  }
  .login-content {
    position: absolute;
    top: 50%;
    right: 10rem;
    width: 30rem;
    height: 21.7rem;
    transform: translate(0,-50%);
    background: #fff;
    box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.4);
    border-radius: 12px;
    z-index: 1;
    .el-icon-user,.el-icon-lock{
      color: rgba(0, 0, 0, 0.5);
    }
    .loginForm {
      position: relative;

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
        border-color: transparent;
        background-image: linear-gradient(90deg, rgba(81,193,203,0.84) 0%, rgba(13,192,118,0.84) 100%);
      }
    }
  }
}
</style>
