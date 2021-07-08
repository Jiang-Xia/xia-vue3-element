<!--
 * @Author: 酱
 * @LastEditors: 酱
 * @Date: 2021-07-02 09:38:08
 * @LastEditTime: 2021-07-08 15:42:38
 * @Description:
 * @FilePath: \xia-vue3-element\src\views\component\custom\index.vue
-->
<template>
  <div class="component-container">
    <el-card class="mg-b-10">
      <template #header>
        <div class="card-header">
          长列表（自定义）
        </div>
      </template>
      <LongList />
    </el-card>
  </div>
</template>

<script>
import LongList from './components/long-list'
export default {
  components: {
    LongList
  },
  setup() {
    return {
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
    // width: 70%;
  }
}
</style>
