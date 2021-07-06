<!--
 * @Author: 酱
 * @LastEditors: 酱
 * @Date: 2021-03-24 09:43:12
 * @LastEditTime: 2021-07-06 15:44:47
 * @Description:
 * @FilePath: \xia-vue3-element\src\views\login\index-transfer.vue
-->
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
import FrostedClass from './frosted-glass.vue'

export default {
  components: {
    DialogLogin,
    PageLogin,
    FrostedClass
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
        // demo_111: 'PageLogin'
        demo_111: 'FrostedClass'
      }
      return obj[code]
    }
  },
  created() {
    this.$store.dispatch('user/getGlobalConfigs').then(() => {
      const code = this.$getCode()
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
