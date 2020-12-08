import { getSiteTitle } from '@/utils/common'
// import { globalConfigs } from '@/api/common'
const loginMixins = {
  data() {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      loginForm: {
        username: '',
        password: '',
        grant_type: 'password'
      },
      loginrules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      },
      sysTitle: getSiteTitle()
    }
  },
  methods: {
    tologinForm(formName) {
      this.$refs[formName].validate()
        .then(valid => {
          if (valid) {
            this.$store.dispatch('user/login', this.loginForm).then(async res => {
              if (res) {
              // 重定向或者首页
                this.$message.success({ content: '登录成功即将为您跳转' })
                this.token = this.$getToken()
                this.loginVisible = false
                setTimeout(() => {
                  const path = this.$route.query.redirect || '/'
                  this.$router.push(path)
                }, 2000)
              } else {
                this.$message.error('用户名，密码不匹配')
              }
            })
          } else {
            this.$message.error('输入信息有误！请重新输入')
            return false
          }
        })
    }
  }
}
export default loginMixins
