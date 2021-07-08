<!--
 * @Author: 酱
 * @LastEditors: 酱
 * @Date: 2021-07-02 09:38:08
 * @LastEditTime: 2021-07-08 15:10:34
 * @Description:
 * @FilePath: \xia-vue3-element\src\views\demo\index.vue
-->
<template>
  <div class="demo-container">
    <el-tabs v-model="activeName" type="border-card">
      <el-tab-pane label="图片热区" name="1">
        <ImageHotArea v-if="activeName==='1'" />
      </el-tab-pane>
      <el-tab-pane label="设置主题" name="2">
        <Theme v-if="activeName==='2'" />
      </el-tab-pane>
      <el-tab-pane label="路由表" name="4">
        <RouterList v-if="activeName==='4'" />
      </el-tab-pane>
      <el-tab-pane label="自定义指令" name="5">
        <Directive v-if="activeName==='5'" />
      </el-tab-pane>
      <el-tab-pane label="其他" name="7">
        7
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import ImageHotArea from './components/image-hot-area'
import Theme from './components/theme'
import RouterList from './components/router-list'
import Directive from './components/directive'

export default {
  components: {
    ImageHotArea,
    Theme,
    RouterList,
    Directive
  },
  setup() {
    return {
      activeName: '5'
    }
  },
  data() {
    return {
      active: 1
    }
  },
  methods: {
    onClick() {
      console.log(this.active)
      if (this.active === 3) {
        this.active = 1
      }
      this.active++
    }
  }
}
</script>
<style scoped lang="scss">
.demo-container{
  padding: 1rem;
  .cusrom-directive{
    padding: 50px;
  }
}
</style>
