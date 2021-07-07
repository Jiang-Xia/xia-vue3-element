<!--
 * @Author: 酱
 * @LastEditors: 酱
 * @Date: 2021-07-05 10:46:31
 * @LastEditTime: 2021-07-07 17:38:29
 * @Description: 自定义组件
 * @FilePath: \xia-vue3-element\src\views\component\components\drag-select.vue
-->
<template>
  <div class="drag-select">
    <ElDragSelect
      v-model="value"
      multiple
      size="small"
      style="width:70%"
      @change="changechange"
    >
      <el-option
        v-for="(item,index) in options"
        :key="index"
        :label="item.label"
        :value="item.value"
      />
    </ElDragSelect>
    <div style="margin-top:30px;">
      <el-tag v-for="item of value" :key="item" style="margin-right:15px;">
        {{ item }}
      </el-tag>
    </div>
  </div>
</template>
<script>
/*
  https://v3.cn.vuejs.org/guide/migration/emits-option.html#_3-x-%E7%9A%84%E8%A1%8C%E4%B8%BA
  强烈建议使用 emits 记录每个组件所触发的所有事件。
  这尤为重要，因为我们移除了 v-on.native 修饰符。
  任何未声明 emits 的事件监听器都会被算入组件的 $attrs 并绑定在组件的根节点上。
*/
import ElDragSelect from '@/components/el-drag-select'
export default {
  name: 'DragSelect',
  components: {
    ElDragSelect
  },
  data() {
    return {
      value: ['Apple', 'Banana', 'Orange'],
      options: [{
        value: 'Apple',
        label: 'Apple'
      }, {
        value: 'Banana',
        label: 'Banana'
      }, {
        value: 'Orange',
        label: 'Orange'
      }, {
        value: 'Pear',
        label: 'Pear'
      }, {
        value: 'Strawberry',
        label: 'Strawberry'
      }]
    }
  },
  mounted() {
    // console.log(this.value, this.options)
  },
  methods: {
    changechange(n) {
      this.$message.success('修改成功')
    }
  }
}
</script>
