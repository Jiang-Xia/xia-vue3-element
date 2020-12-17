<template>
  <div>
    <div>{{ dimData.name }}</div>
    <el-select
      v-model="select"
      size="small"
      multiple
      collapse-tags
    >
      <el-option
        v-for="(item,index) in dimData.options"
        :key="index"
        :value="item.value"
        :label="item.text_show"
      />
    </el-select>
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
      select: []
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
.dim-select{
}
</style>
