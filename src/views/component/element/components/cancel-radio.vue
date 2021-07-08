<!--
 * @Author: 酱
 * @LastEditors: 酱
 * @Date: 2021-07-05 10:46:31
 * @LastEditTime: 2021-07-07 17:38:17
 * @Description: 自定义组件
 * @FilePath: \xia-vue3-element\src\views\component\components\cancel-radio.vue
-->
<template>
  <div class="cancel-radio">
    <el-radio-group v-model="value">
      <el-radio
        :label="1"
        @click.prevent="clickHandle(1)"
      >选项一
      </el-radio>
      <el-radio
        :label="2"
        @click.prevent="clickHandle(2)"
      >选项二
      </el-radio>
    </el-radio-group>
  </div>
</template>
<script>
export default {
  name: 'CancelRadio',
  components: {
  },
  data() {
    return {
      value: ''
    }
  },
  mounted() {
    // console.log(this.value, this.options)
  },
  methods: {
    clickHandle(val) {
      this.value === val ? this.value = '' : this.value = val
      console.log(this.value)
    }
  }
}
</script>
<style lang="scss">
.cancel-radio{
  .el-radio:focus:not(.is-focus):not(:active):not(.is-disabled) .el-radio__inner {
      box-shadow: none;
  }
}
</style>
