<template>
  <el-dialog
    v-model="previewVisible"
    title="预览"
    :close-on-click-modal="false"
    custom-class="xia-dialog-preview"
    width="80%"
    @close="closeHandle"
  >
    <strong>额外的内容</strong>
  </el-dialog>
</template>
<script>
export default {
  data() {
    return {
      previewVisible: false
    }
  },
  methods: {
    init() {
      this.previewVisible = true
    },
    closeHandle() {
      this.previewVisible = false
    }
  }
}
</script>
