<!--
 * @Author: 酱
 * @LastEditors: 酱
 * @Date: 2021-07-05 10:46:31
 * @LastEditTime: 2021-07-19 10:53:39
 * @Description: 自定义组件
 * @FilePath: \xia-vue3-element\src\views\component\element\components\custom-date.vue
-->
<template>
  <div class="custom-date">
    <el-date-picker
      v-model="value"
      :type="type"
      placeholder="选择日期"
      @change="changeHandle"
      @blur="blurHandle"
    />
  </div>
</template>
<script>
export default {
  name: 'CustomDate',
  components: {
  },
  data() {
    return {
      value: '',
      type: 'date'
    }
  },
  mounted() {
    // console.log(this.value, this.options)
  },
  methods: {

    getCustomDateFormat(val, type) {
      const p = (s) => {
        return s < 10 ? '0' + s : s
      }
      if (val instanceof Date) {
        const d = new Date(val)
        const resDate = d.getFullYear() + '-' + p((d.getMonth() + 1)) + '-' + p(d.getDate())
        const resTime = p(d.getHours()) + ':' + p(d.getMinutes()) + ':' + p(d.getSeconds())
        if (type === 'date') {
          val = resDate
        } else if (type === 'datetime') {
          val = resDate + ' ' + resTime
        }
      }
      return val
    },
    changeHandle(val) {
      const date = this.getCustomDateFormat(val, this.type)
      // console.log(val)
      // this.value = '11111111'
    },
    blurHandle() {
      console.log(this)
    }
  }
}
</script>
<style lang="scss">

</style>
