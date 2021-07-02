<!--
 * @Author: 酱
 * @LastEditors: 酱
 * @Date: 2021-07-02 09:38:08
 * @LastEditTime: 2021-07-02 17:49:55
 * @Description:
 * @FilePath: \xia-vue3-element\src\views\demo\index.vue
-->
<template>
  <div class="demo-container">
    <el-tabs v-model="activeName" type="border-card">
      <el-tab-pane label="图片热区" name="1">
        <ImageHotArea />
      </el-tab-pane>
      <el-tab-pane label="设置主题" name="2">
        <Theme />
      </el-tab-pane>
      <el-tab-pane label="长列表" name="3">
        <LongList />
      </el-tab-pane>
      <el-tab-pane label="路由表" name="4">
        <RouterList />
      </el-tab-pane>
      <el-tab-pane label="自定义指令" name="5">
        <div v-watermark class="cusrom-directive" />
      </el-tab-pane>
      <el-tab-pane label="其他" name="6">
        6
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import ImageHotArea from './components/image-hot-area'
import Theme from './components/theme'
import LongList from './components/long-list'
import RouterList from './components/router-list'
import Step from '@/components/step/GiStep'
import Steps from '@/components/step/GiSteps'
export default {
  components: {
    ImageHotArea,
    Theme,
    LongList,
    RouterList,
    Step,
    Steps
  },
  setup() {
    return {
      activeName: '3'
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
  // padding: 1.5rem;
  .cusrom-directive{
    padding: 50px;
  }
}
</style>
