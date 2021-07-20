<!--
 * @Author: 酱
 * @LastEditors: 酱
 * @Date: 2021-07-02 09:38:08
 * @LastEditTime: 2021-07-16 17:07:38
 * @Description:
 * @FilePath: \xia-vue3-element\src\views\component\element\index.vue
-->
<template>
  <div class="component-container">

    <el-card class="mg-b-10">
      <template #header>
        <div class="card-header">
          自定义格式日期控件
        </div>
      </template>
      <CustomDate />
    </el-card>

    <el-card class="mg-b-10">
      <template #header>
        <div class="card-header">
          多选下拉（可拖拽）
        </div>
      </template>
      <DragSelect />
    </el-card>

    <el-card class="mg-b-10">
      <template #header>
        <div class="card-header">
          单选按钮（可取消）
        </div>
      </template>
      <CancelRadio />
    </el-card>

    <el-card class="mg-b-10">
      <template #header>
        <div class="card-header">
          大数据表格优化（虚拟列表）
        </div>
      </template>
      <VirtualList />
    </el-card>
  </div>
</template>

<script>
import DragSelect from './components/drag-select'
import CancelRadio from './components/cancel-radio'
import VirtualList from './components/virtual-list.vue'
import CustomDate from './components/custom-date'
export default {
  components: {
    DragSelect,
    CancelRadio,
    VirtualList,
    CustomDate
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
