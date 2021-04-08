<template>
  <div class="navs-container">
    <div class="xia-logo"><img :src="logo" alt=""></div>
    <section class="search-bar">
      <el-input
        v-model="input3"
        placeholder="请输入内容"
        class="input-with-select"
      >
        <template #append>
          <el-button icon="el-icon-search" />
        </template>
      </el-input>
    </section>
    <el-row v-for="(item,index) in navList" :key="index" :gutter="16">
      <el-col v-for="(item2,index2) in item" :key="index2" :xs="24" :sm="12" :lg="6">
        <section class="nav-item" @click="clickNavHandle(item2)">
          <div class="nav-item__title">{{ item2.cn_name }}</div>
          <div class="nav-item__content">
            <img :src="item2.image_url" alt="">
          </div>
        </section>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import navList from './nav.json'
import logo from '@/assets/img/logo/android-chrome-512x512.png'
function getGroups(array, subGroupLength) {
  var index = 0
  var newArray = []

  while (index < array.length) {
    newArray.push(array.slice(index, index += subGroupLength))
  }

  return newArray
}
export default {
  setup() {
    return {
      logo: logo,
      input3: '',
      navList: getGroups(navList, 4),
      clickNavHandle: function(item) {
        if (!item.link) { return }
        window.open(item.link)
      }
    }
  },
  created() {
    console.log(navList)
  }
}
</script>
<style scoped lang="scss">
.navs-container{
  background-color: #fff;
  padding: 1rem .5rem;
  .xia-logo{
    height: 150px;
    width: 200px;
    margin: 0 auto;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .search-bar{
    width: 50%;
    margin: 0 auto 1rem;
  }
  .section-container{

  }
  .nav-item{
    cursor: pointer;
    border-radius: 5px;
    padding: 1rem 0.8rem;
    min-height: 10rem;
    box-shadow: 0 0 12px rgba($color: #000000, $alpha: .1);
    border: 1px solid #e5e9f2;
  }
  .nav-item:hover{
    color: $main-color;
    border-color: $main-color;
    box-shadow: 0 0 12px rgba($color: $main-color, $alpha: .1);
  }
  .nav-item__title{
    font-weight: 600;
    font-size: 18px;
    text-align: center;
    font-family: sans-serif;
    letter-spacing: 3px;
  }
  .nav-item__content{
    text-align: center;
    img{
      margin: 0 auto;
      max-height: 150px;
      max-width: 150px;
    }
  }
  .el-col {
    border-radius: 5px;
    margin-bottom: 16px;
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
