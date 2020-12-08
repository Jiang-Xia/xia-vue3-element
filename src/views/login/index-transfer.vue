<template>
  <div class="login-component-container">
    <component
      :is="currentComponent"
      v-if="code"
    />
  </div>
</template>

<script>
/*
* 中转页面
*
*/
import DefaultComponent from './index-dialog'
import SzeyComponent from './index-szey'
export default {
  components: {
    DefaultComponent,
    SzeyComponent
  },
  data() {
    return {
      code: ''
    }
  },
  computed: {
    currentComponent() {
      const code = this.code
      const obj = {
        demo_000: 'DefaultComponent',
        szey_115: 'SzeyComponent'
      }
      return obj[code]
    }
  },
  created() {
    this.$store.dispatch('user/getGlobalConfigs').then(() => {
      const code = this.$store.getters.hospCode
      this.code = code
      const obj = {
        demo_000: this.defaultLoginHandle,
        gyfy_117: this.gyfyLoginHandle,
        szey_115: this.szeyLoginHandle
      }
      obj[code] && obj[code]()
    })
  },
  methods: {
    defaultLoginHandle() {
    },
    szeyLoginHandle() {
    },
    gyfyLoginHandle() {
      const service_url = location.protocol + '//' + location.host + location.pathname + 'login'
      const obj = {
        ticket: this.$route.query.ticket,
        service_url: service_url, // 密码
        grant_type: 'gyfy_ticket' // 授权形式
      }
      this.$store.dispatch('user/login', obj).then(async res => {
        if (res) {
        // 重定向或者首页
          this.$message.success('登录成功')
          this.$router.push('/dashboard')
        } else {
          this.$message.error('登录失败')
          location.href = 'https://www.elungcare.com/sso/logout'
        }
      }).catch(err => {
        location.href = 'https://www.elungcare.com/sso/logout'
        return err
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-component-container{
    height: 100%;
    color: #333;
}
</style>
