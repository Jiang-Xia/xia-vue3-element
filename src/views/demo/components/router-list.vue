<!--
 * @Author: 江夏
 * @LastEditors: 江夏
-->
<template>
  <div class="long-list-container">
    <el-button @click="clickBtn">点击我，异步获取动态组件</el-button>
    <div>
      <component :is="componentId" />
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      componentId: null
    }
  },
  methods: {
    clickBtn() {

    }
  }
}
</script>

<style lang="scss" scoped>
.long-list-container{
  height: 100%;
  background-color: #fff;
  height: 700px;
  .custom-item-wrap{
    padding: 11px 17px;
    // margin-bottom: 7px;
  }
  .custom-item{
    background-color: #f7f7f7;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba($color:$main-color, $alpha: .26);
  }
}
</style>
