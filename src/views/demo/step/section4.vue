<template>
  <section class="step-wrap">
    <div class="heading mg-b-10">
      <el-button size="mini" @click="preHandle(1)">上一步</el-button>
      <el-button size="mini" type="primary" @click="submitHandle">提交</el-button>
    </div>
    <el-checkbox v-model="checkbox">checkbox</el-checkbox>
  </section>
</template>

<script>
export default {
  data() {
    return {
      checkbox: false
    }
  },
  methods: {
    getParams() {
      return {
        checkbox: this.checkbox
      }
    },
    preHandle(num) {
      this.$emit('changeactive', num)
    },
    submitHandle() {
      this.$store.commit('demo/stepData', {
        select: this.select
      })
      this.$emit('submit')
    }
  }
}
</script>
<style scoped lang="scss">

</style>
