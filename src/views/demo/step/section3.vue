<template>
  <section class="step-wrap">
    <div class="heading mg-b-10">
      <el-button size="mini" @click="preHandle(1)">上一步</el-button>
      <el-button size="mini" type="primary" @click="nextHandle(3)">下一步</el-button>
    </div>
    <el-select v-model="select">
      <el-option value="1">选项一</el-option>
    </el-select>
  </section>
</template>

<script>
export default {
  data() {
    return {
      select: ''
    }
  },
  methods: {
    getParams() {
      return {
        select: this.select
      }
    },
    preHandle(num) {
      this.$emit('changeactive', num)
    },
    nextHandle(num) {
      this.$emit('changeactive', num)
    }
  }
}
</script>
<style scoped lang="scss">

</style>
