<template>
  <div class="login-default-container">
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
            @keydown.enter="tologinForm('loginForm')"
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
.login-default-container{
  height: 100%;
  width: 100%;
  background: url("~@/assets/img/background/abstract.jpg") no-repeat;
  background-size: 100% 100%;
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

  .login-content {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    z-index: 1;
    .loginForm {
      position: relative;
      background-color: #fff;
      border-radius: .8rem;
      box-shadow: 0 2px 15px rgba($color: #000000, $alpha: 0.3);
      width: 27rem;
      height: 21rem;
      max-width: 460px;
      max-height: 340px;
      padding: 2rem 2rem 0 2rem;
      margin: 2rem 8rem 2rem 2rem;
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
