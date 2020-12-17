<template>
  <div class="question-wrap desp-wrap">
    <h6 class="question-heading">{{ dimLayout.name }}</h6>
  </div>
</template>

<script>
export default {
  props: {
    dimData: {
      default: () => {},
      type: Object
    },
    dimLayout: {
      default: () => {},
      type: Object
    }
  },
  data() {
    return {
      input: ''
    }
  },
  watch: {
    dimData(n) {
      this.input = n.value
    }
  },
  created() {
    this.input = this.dimData.value
    // console.log()
  },
  methods: {
    getRealValue(v) {
      return v
    },
    clickHandle(v) {
      v = this.getRealValue(v)

      this.input = v === this.input ? '' : v
      // console.log(this.dimData.value, '!!!!!!!!!!', v)
      this.$emit('modify', {
        type: 'input',
        en: 'en',
        value: this.input,
        dim_type: 1
      })
    }
  }
}
</script>
<style lang="scss">
.desp-wrap{
  // float: left;
  width: 100%;
}
</style>
