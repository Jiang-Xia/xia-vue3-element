<!--
 * @Author: 酱
 * @LastEditors: 酱
 * @Date: 2021-07-05 15:04:09
 * @LastEditTime: 2021-07-07 11:59:33
 * @Description:
 * @FilePath: \xia-vue3-element\src\components\el-drag-select\index.vue
-->
<template>
  <!-- v-bind="$attrs" 意思就是吧所有父组件的属性或者事件传过来（不管有没有主动传） -->
  <el-select
    ref="dragSelect"
    v-model="selectVal"
    v-bind="$attrs"
  >
    <!-- 如果组件作为了父级容器，使用组件传的属性会被这个组件接收 -->
    <slot />
  </el-select>
</template>
<script>
// import { toRefs, ref, reactive, computed } from 'vue'
// v-model 实际上就是绑定属性加实践修改父组件数据的语法糖
import Sortable from 'sortablejs'
export default {
  name: 'ElDragSelect',
  props: {
    value: {
      default: () => [],
      type: Array
    }
  },
  data() {
    return {
      selectVal: []
    }
  },
  mounted() {
    this.setSorted()
    // console.log(this.selectVal)
  },
  methods: {
    setSorted() {
      const el = this.$refs.dragSelect.$el.querySelectorAll('.el-select__tags > span')[0]
      this.sortable = Sortable.create(el, {
        ghostClass: 'sortable-ghost',
        setData: function(dataTransfer) {
          dataTransfer.setData('Text', '')
        },
        onEnd: evt => {
          const targetRow = this.selectVal.splice(evt.oldIndex, 1)[0]
          this.selectVal.splice(evt.newIndex, 0, targetRow)
        }
      })
    }
  }
}
</script>
