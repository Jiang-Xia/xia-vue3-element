<template>
  <div class="question-wrap single-dropdown-wrap">
    <h6 class="question-heading">{{ dimLayout.name }}</h6>
    <div class="control-wrap">
      <el-select
        v-model="select"
        size="small"
      >
        <el-option
          v-for="(item,index) in dimLayout.options"
          :key="index"
          :value="item.option_value"
          :label="item.option_name"
        />
      </el-select>
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
      select: ''
    }
  },
  watch: {
    dimData(n) {
      this.select = n.value
    }
  },
  created() {
    this.select = this.dimData.value
    // console.log()
  },
  methods: {
    getRealValue(v) {
      return v
    },
    clickHandle(v) {
      v = this.getRealValue(v)

      this.select = v === this.select ? '' : v
      // console.log(this.dimData.value, '!!!!!!!!!!', v)
      this.$emit('modify', {
        type: 'select',
        en: 'en',
        value: this.select,
        dim_type: 1
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.single-dropdown-wrap{
  // width: 50%;
  width: 100%;
}
</style>
