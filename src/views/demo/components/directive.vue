<!--
 * @Author: 酱
 * @LastEditors: 酱
 * @Date: 2021-07-05 10:46:31
 * @LastEditTime: 2021-07-05 11:58:53
 * @Description:
 * @FilePath: \xia-vue3-element\src\views\demo\components\directive.vue
-->
<template>
  <div>
    <el-card class="mg-t-10">
      <template #header>
        <div class="card-header">
          水印
        </div>
      </template>
      <div>
        <div v-watermark class="cusrom-directive" />
      </div>
    </el-card>

    <el-card class="mg-t-10">
      <template #header>
        <div class="card-header">
          复制
        </div>
      </template>
      <div>
        <el-button v-copy="copyText">复制</el-button>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      copyText: '这是一段复制的文本。。。'
    }
  }
}
</script>
