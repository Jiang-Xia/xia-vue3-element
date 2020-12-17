<template>
  <div>
    <div>{{ dimData.name }}</div>
    <div>
      <el-input v-model="textarea" type="textarea" size="small" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dimData: {
      default: () => {},
      type: Object
    }
  },
  data() {
    return {
      textarea: ''
    }
  },
  watch: {
    dimData(n) {
      this.textarea = n.value
    }
  },
  created() {
    this.textarea = this.dimData.value
    // console.log()
  },
  methods: {
    getRealValue(v) {
      return v
    },
    clickHandle(v) {
      v = this.getRealValue(v)
      
      this.textarea = v === this.textarea ? '' : v
      // console.log(this.dimData.value, '!!!!!!!!!!', v)
      this.$emit('modify', {
        type: 'textarea',
        en: 'en',
        value: this.textarea,
        dim_type: 1
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.dim-textarea{
}
</style>
