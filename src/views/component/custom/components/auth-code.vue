<!--
 * @Author: 酱
 * @LastEditors: 酱
 * @Date: 2021-07-15 10:10:14
 * @LastEditTime: 2021-07-15 11:26:09
 * @Description:
 * @FilePath: \xia-vue3-element\src\views\component\custom\components\auth-code.vue
-->
<template>
  <div class="auth-code-container">
    <AuthCode ref="AuthCode" />
    <el-button size="small" type="text" @click="createCodeHandle">看不清？重新生成</el-button>
    <div style="margin-top: 15px">
      <el-input v-model="writeCode" size="small" placeholder="请输入图片中的验证码">
        <template #append>
          <el-button size="small" @click="checkCodeHandle"> 确认</el-button>
        </template>
      </el-input>
    </div>
  </div>
</template>

<script>
import AuthCode from '@/components/auth-code'
export default {
  components: {
    AuthCode
  },
  data() {
    return {
      authCode: '',
      writeCode: ''
    }
  },
  mounted() {
    this.authCode = this.$refs.AuthCode.authCode
    console.log(this.authCode)
  },
  methods: {
    createCodeHandle() {
      this.authCode = this.$refs.AuthCode.createCode(4)
    },
    checkCodeHandle() {
      const { authCode, writeCode } = this
      if (authCode.toUpperCase() !== writeCode.toUpperCase()) {
        this.$message.warning('验证码不正确！')
      } else {
        this.$message.warning('输入正确！')
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.auth-code-container{
    .auth-code{
        height: 50px;
        width: 130px;
    }
}
</style>
