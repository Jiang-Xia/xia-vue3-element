<template>
  <div class="navs-container">
    <el-row v-for="item in 4" :key="item" :gutter="16">
      <el-col :xs="24" :sm="12" :lg="6">
        <section class="nav-item-list">
          {{ item }}
        </section>
      </el-col>
      <el-col :xs="24" :sm="12" :lg="6">
        <section class="nav-item-list">
          {{ item }}
        </section>
      </el-col>
      <el-col :xs="24" :sm="12" :lg="6">
        <section class="nav-item-list">
          {{ item }}
        </section>
      </el-col>
      <el-col :xs="24" :sm="12" :lg="6">
        <section class="nav-item-list">
          {{ item }}
        </section>
      </el-col>
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
  // .el-row {
  //   margin-bottom: 20px;
  //   &:last-child {
  //     margin-bottom: 0;
  //   }
  // }
  .el-col {
    border-radius: 5px;
    margin-bottom: 16px;
    .nav-item-list{
      border-radius: 5px;
      padding: 1rem 0.8rem;
      min-height: 10rem;
      box-shadow: 0 0 12px rgba($color: #000000, $alpha: .1);
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
}
</style>
