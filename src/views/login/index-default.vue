<template>
  <div class="login-default-container" />
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

}
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
