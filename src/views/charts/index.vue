<template>
  <div class="charts-container clearfix">
    <div class="fl chart-wrap">
      <Line />
    </div>
    <div class="fl chart-wrap">
      <Water />
    </div>
    <div class="fl chart-wrap">
      <Bar />
    </div>
    <div class="fl chart-wrap">
      <Radar />
    </div>
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
  padding: 1rem 0.25rem;
  .chart-wrap{
    margin-bottom: 0.5rem;
    height: 25rem;
    width: 49%;
    background-color: #fff;
    box-shadow: 0 0px 12px 0 rgba(0,0,0,.15);
  }
  &>:nth-child(2n-1){
    margin-right: 1%;
  }
}
</style>
