<template>
  <div class="step-container">
    <h3>步骤条</h3>
    <el-steps :active="active" finish-status="success">
      <el-step title="步骤 1" icon="el-icon-edit" />
      <el-step title="步骤 2" icon="el-icon-upload" />
      <el-step title="步骤 3" icon="el-icon-picture" />
      <el-step title="步骤 4" icon="el-icon-check" />
    </el-steps>
    <!-- <el-button @click="active-- <= 0?active=0:''">上一步</el-button>
    <el-button @click="active++ >= 3?active=0:''">下一步</el-button> -->
    <div class="step-content-container mg-t-10">
      <!-- name="fade-transform" mode="out-in" -->
      <transition name="aaa" mode="out-in">
        <Section1 v-show="active===0" ref="Section1" @changeactive="activeChangeHandle" />
      </transition>
      <transition name="aaa" mode="out-in">
        <Section2 v-show="active===1" ref="Section2" @changeactive="activeChangeHandle" />
      </transition>
      <transition name="aaa" mode="out-in">
        <Section3 v-show="active===2" ref="Section3" @changeactive="activeChangeHandle" />
      </transition>
      <transition name="aaa" mode="out-in">
        <Section4 v-show="active===3" ref="Section4" @changeactive="activeChangeHandle" @submit="submitHandle" />
      </transition>
    </div>
  </div>
</template>

<script>
import Section1 from './section1'
import Section2 from './section2'
import Section3 from './section3'
import Section4 from './section4'
import { ref, reactive } from 'vue'
export default {
  components: {
    Section1,
    Section2,
    Section3,
    Section4
  },
  setup() {
    const active = ref(0)
    const activeChangeHandle = (num) => {
      active.value = num
      // console.log('changeactive')
    }
    return {
      active,
      activeChangeHandle
    }
  },
  data() {
    return {
    }
  },
  watch: {
    active(n) {
      console.log(n)
    }
  },
  methods: {
    submitHandle() {
      const condition = this.$refs.Section1.getParams()
      const field = this.$refs.Section2.getParams()
      const options = this.$refs.Section3.getParams()
      const section4 = this.$refs.Section4.getParams()
      const obj = {
        ...condition,
        ...field,
        ...options,
        ...section4
      }
      console.log(obj)
    }
  }
}
</script>
<style scoped lang="scss">
.step-container{
  padding: 0.5rem;
  background-color: #fff;
  .section-container{

  }
  .step-wrap{
    min-height: 50rem;
    padding: 1rem;
  }
  .step-content-container{
    .step-wrap:nth-child(1){
      // background-color: #67C23A;
    }
    .step-wrap:nth-child(2){
      // background-color: #E6A23C;
    }
    .step-wrap:nth-child(3){
      // background-color: #F56C6C;
    }
    .step-wrap:nth-child(4){
      // background-color: #eeeeee;
    }
  }
}
</style>
