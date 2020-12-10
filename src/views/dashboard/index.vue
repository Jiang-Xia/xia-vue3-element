<template>
  <div class="dashboard-container">
    <div />
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
      antAndNative: ''
    }
  },
  watch: {
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
