<template>
  <div class="question-wrap multiple-choice-wrap">
    <h6 class="question-heading">{{ dimLayout.name }}</h6>
    <div class="control-wrap">
      <el-checkbox-group

        v-model="checkbox"
        class="me-checkbox-group"
      >
        <el-checkbox
          v-for="(item,index) in dimLayout.options"
          :key="index"
          :label="item.option_value"
        >{{ item.option_name }}</el-checkbox>
      </el-checkbox-group>
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
      checkbox: []
    }
  },
  watch: {
    dimData(n) {
      // this.checkbox = n.value
    }
  },
  created() {
    // this.checkbox = this.dimData.value
    // console.log()
  },
  methods: {
    getRealValue(v) {
      return v
    },
    clickHandle(v) {
      v = this.getRealValue(v)

      this.checkbox = v === this.checkbox ? '' : v
      // console.log(this.dimData.value, '!!!!!!!!!!', v)
      this.$emit('modify', {
        type: 'checkbox',
        en: 'en',
        value: this.checkbox,
        dim_type: 1
      })
    }
  }
}
</script>
<style lang="scss">
.multiple-choice-wrap{
  // float: left;
  width: 100%;
}
</style>
