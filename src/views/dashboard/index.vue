<template>
  <div class="dashboard-container">
    <section v-for="(module,moduleIndex) in moduleData" :key="moduleIndex" class="section-container">
      <p class="module-title"><span class="marker-site" /> {{ module.name }}</p>
      <div
        v-for="(item,index) in module.imgList"
        :key="index"
        class="item-wrap"
      >
        <img
          v-lazyload
          class="img-item"
          :src="item"
          alt=""
        >
      </div>

    </section>
    <!--
    <section>
      <video
        width="400"
        height="300"
        preload="auto"
        src="./孟佳mv.mp4"
        data-video="0"
        autoplay="autoplay"
        style="border:1px solid red"
      />
    </section> -->
  </div>
</template>

<script>
const moduleData = [
  {
    name: '我的图床',
    type: 'figure-bed',
    imgList: [
      'https://cdn.jsdelivr.net/gh/jiang-xia/figure-bed/img/wallhaven-y8xzod.jpg',
      'https://cdn.jsdelivr.net/gh/jiang-xia/figure-bed/img/%E5%86%AC%E5%AD%A3%E8%BA%BA%E5%9C%A8%E9%9B%AA%E5%9C%B0%E7%9A%84%E5%A5%B3%E5%AD%A9%20%E7%8E%AB%E7%91%B0%E8%8A%B1%20%E5%B0%8F%E7%8B%97%204k%E9%AB%98%E6%B8%85%E5%A3%81%E7%BA%B8_%E5%BD%BC%E5%B2%B8%E5%9B%BE%E7%BD%91.jpg',
      'https://cdn.jsdelivr.net/gh/jiang-xia/figure-bed/img/wallhaven-kwd9d1.png',
      'https://cdn.jsdelivr.net/gh/jiang-xia/figure-bed/img/uglydolls-3840x2160-4k-21814.jpg'
    ]
  },
  {
    name: '科技',
    type: 'technology',
    imgList: [
      'https://cdn.jsdelivr.net/gh/jiang-xia/figure-bed/img/%E7%81%AB%E7%AE%AD.jpg',
      'https://cdn.jsdelivr.net/gh/jiang-xia/figure-bed/img/transformers-the-last-knight-3840x2160-transformers-5-4k-5k-13752.jpg',
      'https://cdn.jsdelivr.net/gh/jiang-xia/figure-bed/img/spaceship-3840x2160-futuristic-space-4k-20152.jpg',
      'https://cdn.jsdelivr.net/gh/jiang-xia/figure-bed/img/pacific-rim-uprising-3840x2160-4k-17601.jpg'
    ]
  },
  {
    name: '猫',
    type: 'cat',
    imgList: [
      'https://farm1.static.flickr.com/844/41801899480_755e20ce44.jpg',
      'https://visualhunt.com/photos/16/cat.jpg?s=l',
      'https://farm1.static.flickr.com/598/23728160296_31edb0f869.jpg',
      'https://farm4.static.flickr.com/3300/3652077613_6d9d96b1f3.jpg'
    ]
  },
  {
    name: '狗',
    type: 'dog',
    imgList: [
      'https://farm8.static.flickr.com/7916/47503227502_c0127102e6.jpg',
      'https://farm4.static.flickr.com/3870/14218447187_8f1cc4ff43.jpg',
      'https://farm5.static.flickr.com/4381/36942627366_9323f8b526.jpg',
      'https://farm5.static.flickr.com/4181/34455617445_e685f78cda.jpg'
    ]
  }
]
import { onMounted } from 'vue'
export default {
  name: 'Dashboard',
  setup() {
    onMounted(() => {
      console.log('info')
    })
  },
  data() {
    return {
      input: '',
      moduleData
    }
  },
  watch: {},
  created() {},
  methods: {}
}
</script>
<style scoped lang="scss">
.dashboard-container {
  // padding: 1rem;
  height: 100%;
  .section-container{
    // background-image: linear-gradient(to right, #c2d0e2 0%, #c3cfe2 100%);
    background-color: rgba($color: #f3f3f3, $alpha: 1);
    border-radius: 15px;
    margin-bottom: 16px;
  }
  .module-title{
    margin-bottom: .8rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    height: 44px;
    line-height: 44px;
    font-size: 18px;
    border-bottom: 1px dashed $minor-border-color;
  }
  .marker-site{
    height: 18px;
    width: 5px;
    margin-left: 14px;
    margin-right: 8px;
    border-radius: 2px;
    background-color: $main-color;
  }
  .item-wrap{
    padding: 12px 16px;
    display: inline-block;
    border-radius: 15px;
    height: 280px;
    min-width: 10rem;
    // width: 380px;
    margin-left: 24px;
    margin-bottom: 20px;
    transition: transform .5s;
    box-shadow: 0 6px 15px 0 rgba($color: #000000, $alpha: .3);
    backdrop-filter: blur(30px);
    text-align: center;
  }
  .img-item{
    height: 100%;
    border-radius: 15px;
    transition: transform .5s;
  }
  .img-item:hover{
    transform: scale(1.05,1.05);
  }

  @keyframes Shake {
    0%{
      transform: rotateZ(3deg);
    }
    50%{
      transform: rotateZ(3deg);
    }
    50%{
      transform: rotateZ(0deg);
    }
    100%{
      transform: rotateZ(-3deg);
    }
  }
}
</style>
