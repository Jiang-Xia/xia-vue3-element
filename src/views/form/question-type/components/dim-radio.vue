<template>
  <div>
    <div>{{ dimData.name }}</div>
    <el-radio-group
      v-model="radio"
      class="me-radio-group"
    >
      <el-radio
        v-for="(item,index) in dimData.options"
        :key="index"
        :label="getRealValue(item.value)"
        @click.native.prevent="clickHandle(item.value)"
      >{{ item.text_show }}</el-radio>
    </el-radio-group>
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
      radio: ''
    }
  },
  watch: {
    dimData(n) {
      this.radio = n.value
    }
  },
  created() {
    this.radio = this.dimData.value
    // console.log()
  },
  methods: {
    getRealValue(v) {
      return v
    },
    clickHandle(v) {
      v = this.getRealValue(v)
      this.radio = v === this.radio ? '' : v
      // console.log(this.dimData.value, '!!!!!!!!!!', v)
      this.$emit('modify', {
        type: 'radio',
        en: 'en',
        value: this.radio,
        dim_type: 1
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.dim-radio{
}
</style>
