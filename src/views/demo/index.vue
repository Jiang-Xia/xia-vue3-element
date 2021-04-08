<template>
  <div class="demo-container">
    <el-tabs type="border-card">
      <el-tab-pane label="图片热区">
        <ImageHotArea />
      </el-tab-pane>
      <el-tab-pane label="其他">
        其他
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import ImageHotArea from './components/image-hot-area'
export default {
  components: {
    ImageHotArea
  },
  setup() {
    return {

    }
  }
}
</script>
<style scoped lang="scss">
.demo-container{
  padding: 1.5rem;
}
</style>
