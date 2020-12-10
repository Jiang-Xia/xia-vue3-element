<template>
  <div class="navs-container">
    <el-row :gutter="10">
      <el-col :xs="12" :sm="12" :lg="6"><div class="grid-content bg-purple" /></el-col>
      <el-col :xs="12" :sm="12" :lg="6"><div class="grid-content bg-purple-light" /></el-col>
      <el-col :xs="12" :sm="12" :lg="6"><div class="grid-content bg-purple" /></el-col>
      <el-col :xs="12" :sm="12" :lg="6"><div class="grid-content bg-purple-light" /></el-col>
    </el-row>
  </div>
</template>

<script>
const navList = [
  {
    cn_name: '导航一',
    en_name: '',
    link: '',
    icon: ''
  }
]
export default {
  setup() {
    return {

    }
  }
}
</script>
<style scoped lang="scss">
.navs-container{
  background-color: #fff;
  padding: 1rem .5rem;
  .section-container{

  }
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
}
</style>
