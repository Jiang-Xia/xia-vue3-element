<template>
  <div class="dashboard-container">
    <el-select v-model="select">
      <el-option :value="1">blue</el-option>
      <el-option :value="2">red</el-option>
      <el-option :value="3">orange</el-option>
    </el-select>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
export default {
  setup() {
    onMounted(() => {
      console.log('info')
    })
  },
  data() {
    return {
      antInput: 'antInput',
      nativeInput: 'nativeInput',
      antAndNative: '',
      select: 1
    }
  },
  watch: {
    select(n) {
      this.$nextTick(() => {
        let str = ''

        if (n === 1) {
          str = '.body-theme-blue'
        } else if (n === 2) {
          str = '.body-theme-red'
        } else {
          str = '.body-theme-orange'
        }
        document.querySelector('body').classList.add(str)
      })
    }
  },
  created() {
  },
  methods: {
  }
}
</script>
<style scoped lang="scss">
.dashboard-container{
  padding: 1rem;
}
</style>
