<!--
 * @Author: 酱
 * @LastEditors: 酱
 * @Date: 2021-07-02 09:38:08
 * @LastEditTime: 2021-07-06 17:36:18
 * @Description:
 * @FilePath: \xia-vue3-element\src\views\component\index.vue
-->
<template>
  <div class="component-container">
    <el-card class="mg-b-10">
      <template #header>
        <div class="card-header">
          多选下拉（可拖拽）
        </div>
      </template>
      <DragSelect />
    </el-card>

  </div>
</template>

<script>
import DragSelect from './components/drag-select'
export default {
  components: {
    DragSelect
  },
  setup() {
    return {
      activeName: '6'
    }
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>
<style scoped lang="scss">
.component-container{
  padding: 1rem 1.2rem;
  min-height: 80%;
  background-color: #fff;
  border-radius: $border-radius;
  .el-card{
    width: 70%;
  }
  .cusrom-directive{
    padding: 50px;
  }
}
</style>
