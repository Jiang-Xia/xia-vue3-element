<template>
  <div>
    <div>{{ dimData.topic }}</div>
    <el-checkbox-group
      v-model="checkbox"
      class="me-checkbox-group"
    >
      <el-checkbox
        v-for="(item,index) in dimData.options"
        :key="index"
        :label="item.text_show"
      >{{ item.text_show }}</el-checkbox>
    </el-checkbox-group>
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
      checkbox: []
    }
  },
  watch: {
    dimData(n) {
      this.checkbox = n.value
    }
  },
  created() {
    this.checkbox = this.dimData.value
    // console.log()
  },
  methods: {
    getRealValue(v) {
      return v
    },
    clickHandle(v) {
      v = this.getRealValue(v)
      if (!this.isEditing) return
      const en = this.dimLayout.dim_en
      this.checkbox = v === this.checkbox ? '' : v
      // console.log(this.dimData.value, '!!!!!!!!!!', v)
      this.$emit('modify', {
        type: 'checkbox',
        en: en,
        value: this.checkbox,
        dim_type: 1
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.dim-checkbox{
}
</style>
