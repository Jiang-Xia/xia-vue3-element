<!--
 * @Author: 酱
 * @LastEditors: 酱
 * @Date: 2021-07-05 10:46:31
 * @LastEditTime: 2021-07-05 17:16:33
 * @Description: 自定义组件
 * @FilePath: \xia-vue3-element\src\views\component\components\custom-component.vue
-->
<template>
  <div>
    <ElDragSelect
      v-model="value"
      multiple
      size="small"
      style="width:70%"
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
import ElDragSelect from '@/components/el-drag-select'
export default {
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
      this.value = n
    }
  }
}
</script>
