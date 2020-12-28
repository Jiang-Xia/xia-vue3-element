<template>
  <section class="step-wrap">
    <div class="heading mg-b-10">
      <el-button size="mini" type="primary" @click="nextHandle(1)">下一步</el-button>
    </div>
    <p v-for="item in arr" :key="item.id" class="mg-b-10">
      {{ item.name }}
      <el-input v-model="item.input" size="mini" style="width:auto;" />
    </p>
  </section>
</template>

<script>
import { reactive } from 'vue'
export default {
  setup() {
    let i = 0
    const arr = reactive([])
    while (i < 5) {
      arr.push({
        id: 'id' + i,
        input: '',
        name: 'id' + i
      })
      i++
    }
    return {
      arr
    }
  },
  methods: {
    getParams() {
      return {
        input_list: this.arr
      }
    },
    nextHandle(num) {
      this.$emit('changeactive', num)
    }
  }
}
</script>
<style scoped lang="scss">

</style>
