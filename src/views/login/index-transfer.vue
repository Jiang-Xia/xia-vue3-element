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
import DialogLogin from './index-dialog'
import PageLogin from './index-default'
export default {
  components: {
    DialogLogin,
    PageLogin
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
        demo_000: 'DialogLogin',
        demo_111: 'PageLogin'
      }
      return obj[code]
    }
  },
  created() {
    this.$store.dispatch('user/getGlobalConfigs').then(() => {
      const code = this.$store.getters.hospCode
      this.code = code
      const obj = {
        demo_000: this.defaultLoginHandle
      }
      obj[code] && obj[code]()
    })
  },
  methods: {
    defaultLoginHandle() {
    },
    szeyLoginHandle() {
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
