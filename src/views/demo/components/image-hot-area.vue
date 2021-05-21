<template>
  <div class="demo-container">
    <!-- emoji -->
    <div class="section-container">
      <img :src="barImg" alt="" usemap="#mymap" width="640" height="82">
      <map id="mymap" name="mymap">
        <area
          class="my-area"
          coords="0,23,232,60"
          nohref="#1"
          shape="rect"
          alt="蓝色"
          title="蓝色"
          @click="clickAreaHandle('蓝色')"
        >
        <area
          class="my-area"
          coords="232,23,352,60"
          nohref="#2"
          shape="rect"
          alt="黄色"
          title="黄色"
          @click="clickAreaHandle('黄色')"
        >
        <area
          class="my-area"
          coords="352,23,477,60"
          nohref="#3"
          shape="rect"
          alt="橙色"
          title="橙色"
          @click="clickAreaHandle('橙色')"
        >
        <area
          class="my-area"
          coords="477,23,631,60"
          nohref="#4"
          shape="rect"
          alt="绿色"
          title="绿色"
          @click="clickAreaHandle('绿色')"
        >
      </map>
    </div>
    <div>
      <img src="./img/mm1.jpg" alt="美女" usemap="#MM" width="256" height="191">
      <map id="MM" name="MM">
        <area
          class="my-area"
          shape="rect"
          coords="20,20,80,80"
          nohref="#rect"
          alt="矩形"
          title="矩形"
          @click="clickMMHandle(1)"
        >
        <area
          shape="circle"
          class="my-area"
          coords="200,50,50"
          nohref="#circle"
          alt="圆形"
          title="圆形"
          @click="clickMMHandle(2)"
        >
        <area
          shape="poly"
          class="my-area"
          coords="150,100,200,120,180,130,190,180,150,150,100,160,140,120,100,110"
          nohref="#poly"
          alt="多边形"
          title="多边形"
          @click="clickMMHandle(3)"
        >
      </map>
    </div>
  </div>
</template>

<script>
import barImg from './img/条形cut.jpg'
export default {
  setup() {
    return {
      barImg,
      clickAreaHandle: function(num) {
        console.log(`==${num}==`)
      },
      clickMMHandle: function(num) {
        console.log(`==${num}==`)
      }
    }
  }
}
</script>
<style scoped lang="scss">
.demo-container{
  .section-container{
    .my-area{
      cursor: text;
      background-color: red;
    }
  }
}
</style>
