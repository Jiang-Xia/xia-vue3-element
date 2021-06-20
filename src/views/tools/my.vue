<!--
 * @Author: 江夏
 * @LastEditors: 江夏
-->
<template>
  <div class="my-upload-container">
    <div class="main-content">
      <!-- <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList"
        list-type="picture"
      >
        <el-button size="small" type="primary">点击上传</el-button>
        <template #tip>
          <div class="el-upload__tip">
            只能上传 jpg/png 文件，且不超过 500kb
          </div>
        </template>
      </el-upload> -->
      <input type="file" name="image" @change="changeHandle">
    </div>
  </div>
</template>
<script>
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { computed, ref, onCreated, onMounted } from 'vue'
import { Base64 } from 'js-base64'
import axios from 'axios'
export default {
  setup() {
    const content = ref('')
    return {
      content,
      tableData: [],
      handlePreview() {

      },
      handleRemove() {

      },
      sendFile() {
        const githubToken = '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'
        const url = `https://api.github.com/repos/jiang-xia/figure-bed/contents/myImages/`
        axios({
          headers: { 'Authorization': 'token ' + githubToken },
          url,
          method: 'post',
          data: {
            message: '111',
            content: this.content
          }
        }).then(res => {
          console.log(res)
        })
      },
      fileList: [],
      changeHandle(e) {
        const file = e.target.files[0]
        content.value = Base64.encode(file)
        this.sendFile()
      }
    }
  },
  created() {
    // this.sendFile()
  }
}
</script>
<style lang="scss" scoped>
.my-upload-container{
  background-color: #fff;
  height: 100%;
  padding-top: 3rem;
  .main-content{
    box-shadow: $main-box-shadow;
    margin: 0 auto;
    width: 70%;
    min-height: 50%;
    padding: 2rem;
  }
}
</style>
