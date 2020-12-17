<template>
  <div>
    <div>{{ dimData.name }}</div>
    <div>
      <el-input v-model="textarea" type="textarea" size="small" @change="changeHandle" />
    </div>
  </div>
</template>

<script>
export default {
  inject: ['dimData'],
  // props: {
  //   dimData: {
  //     default: () => {},
  //     type: Object
  //   }
  // },
  data() {
    return {
      textarea: ''
    }
  },
  watch: {
    dimData(n) {
      console.log('111111111111', n)
      this.textarea = n.value
    }
  },
  created() {
    console.log(this.dimData)
    this.textarea = this.dimData.value
    // console.log()
  },
  methods: {
    getRealValue(v) {
      return v
    },
    changeHandle() {
      this.log(this.dimData)
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
