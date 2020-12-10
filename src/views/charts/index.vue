<template>
  <div class="charts-container clearfix">
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :lg="12">
        <div class="fl chart-wrap">
          <Line />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="12">
        <div class="fl chart-wrap">
          <Water />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="12">
        <div class="fl chart-wrap">
          <Bar />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="12">
        <div class="fl chart-wrap">
          <Radar />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  setup() {
    // console.log(echarts)
    return {

    }
  },
  created() {
    // console.log(echarts)
  }
}
</script>
<style scoped lang="scss">
.charts-container{
  // height: 100%;
  // overflow: auto;
  background-color: #fff;
  padding: 0.5rem;
  .chart-wrap{
    margin-bottom: 0.5rem;
    height: 25rem;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 0px 12px 0 rgba(0,0,0,.15);
  }
}
</style>
