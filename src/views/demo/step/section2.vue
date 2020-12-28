<template>
  <section class="step-wrap">
    <div class="heading mg-b-10">
      <el-button size="mini" @click="preHandle(0)">上一步</el-button>
      <el-button size="mini" type="primary" @click="nextHandle(2)">下一步</el-button>
    </div>
    <el-tree
      ref="tree"
      :data="data"
      show-checkbox
      node-key="id"
      :default-expanded-keys="[2, 3]"
      :default-checked-keys="[5]"
      :props="defaultProps"
    />
  </section>
</template>

<script>
import { reactive } from 'vue'
export default {
  data() {
    return {
      data: [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    getParams() {
      return {
        tree_list: this.$refs.tree.getCheckedNodes()
      }
    },
    preHandle(num) {
      this.$emit('changeactive', num)
    },
    nextHandle(num) {
      this.$emit('changeactive', num)
    }
  }
}
</script>
<style scoped lang="scss">

</style>
