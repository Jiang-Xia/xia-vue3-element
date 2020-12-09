<template>
  <el-dialog
    v-model="loginVisible"
    title="修改密码"
    :close-on-click-modal="false"
    class="logout-dialog"
    width="481px"
    :modal="modal"
    @close="closeHandle"
  >
    <el-form
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      class="ruleForm"
      label-width="95px"
      auto-complete="off"
    >
      <el-form-item prop="oldPass" label="原密码">
        <el-input v-model="ruleForm.oldPass" type="text" auto-complete="off" />
      </el-form-item>
      <el-form-item prop="pass" label="新密码">
        <div class="xia-item">
          <el-input v-model="ruleForm.pass" type="text" auto-complete="off" />
        </div>
      </el-form-item>
      <el-form-item prop="checkPass" label="确认新密码">
        <div class="xia-item">
          <el-input v-model="ruleForm.checkPass" type="text" auto-complete="off" />
        </div>
      </el-form-item>
      <div class="center">
        <el-button size="medium" type="primary" @click="toRuleForm('ruleForm')">确认修改</el-button>
      </div>
    </el-form>
    <!-- <span slot="footer" class="dialog-footer">
      <el-button
        type="primary"
        @click="tologinForm('loginForm')"
      >登 录</el-button>
    </span> -->
  </el-dialog>
</template>
<script>
import * as request from '@/api/profile'
import { removeToken, removeInfo } from '@/utils/cookie'
export default {
  data() {
    var checkOldPass = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('原密码不能为空'))
      } else {
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        const reg = /^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)(?![\W_]+$)\S{8,20}$/
        if (!reg.test(value)) {
          callback(new Error('密码必须含有小写字母、大写字母、数字、特殊符号的两种及以上 ; 长度在8到20位之间！！请重新填写'))
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass')
          }
          callback()
        }
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      loginVisible: false,
      modal: true,
      ruleForm: {
        oldPass: '',
        pass: '',
        checkPass: ''
      },
      rules: {
        oldPass: [{ validator: checkOldPass, required: true, trigger: 'blur' }],
        pass: [{ validator: validatePass, required: true, trigger: 'blur' }],
        checkPass: [{ validator: validatePass2, required: true, trigger: 'blur' }]
      }
    }
  },
  methods: {
    init() {
      this.loginVisible = true
    },
    closeHandle() {
      this.loginVisible = false
    },
    toRuleForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          const obj = {
            old_password: this.ruleForm.oldPass,
            new_password: this.ruleForm.pass
          }
          request.editPassword(obj).then(() => {
            this.$message.success('修改密码成功，请重新登录！')
            removeToken()
            removeInfo()
            setTimeout(() => {
              this.closeHandle()
              this.$router.push('/login')
            }, 1000)
          })
        } else {
          return false
        }
      })
    }
  }
}
</script>
<style lang="scss">
.logout-dialog{
    .ruleForm{
      .el-form-item{
        margin-bottom: 34px;
      }
    }
}
</style>
