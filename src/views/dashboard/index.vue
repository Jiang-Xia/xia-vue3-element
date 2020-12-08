<template>
  <div class="dashboard-container">
    <el-button
      type="primary"
      @click="openHandle"
    >
      打开弹窗
    </el-button>
    <xia-dialog
      v-if="dialogVisible"
      title="首页"
      @close="closeHandle"
    >
      <el-button
        type="primary"
      >
        body
      </el-button>
      <template #footer>
        <el-button
          type="primary"
        >
          footer
        </el-button>
      </template>
    </xia-dialog>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const dialogVisible = ref(false)
    const openHandle = () => {
      dialogVisible.value = true
    }
    const closeHandle = () => {
      dialogVisible.value = false
    }
    return {
      dialogVisible,
      openHandle,
      closeHandle
    }
  },
  data() {
    return {
      antInput: 'antInput',
      nativeInput: 'nativeInput',
      antAndNative: ''
    }
  },
  watch: {
    onAntInputChanged(n, o) {
      console.log(n, o)
    },
    onNativeInputChanged(n, o) {
      console.log(n, o)
      // 改名
    }
  },
  created() {
    this.$axios.get('/mock/news').then(res => {
      console.log(res)
    })
  },
  methods: {
    clickHandle() {
    // XiaLogin.init()
      this.antAndNative = '打开'
    },
    changeHandle() {

    }
  }
}
</script>
<style scoped lang="scss">
.dashboard-container{
  padding: 1rem;
}
</style>
