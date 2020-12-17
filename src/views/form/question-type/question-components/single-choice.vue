<template>
  <div class="question-wrap single-choice-wrap">
    <h6 class="question-heading">{{ dimLayout.name }}</h6>
    <div class="control-wrap">
      <el-radio-group
        v-model="radio"
        class="me-radio-group"
      >
        <el-radio
          v-for="(item,index) in dimLayout.options"
          :key="index"
          :label="getRealValue(item.option_value)"
          @click.native.prevent="clickHandle(item.option_value)"
        >{{ item.option_name }}</el-radio>
      </el-radio-group>
    </div>
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
.single-choice-wrap{
  width: 100%;
}
</style>
