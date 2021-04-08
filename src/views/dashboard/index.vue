<template>
  <div class="dashboard-container">
    <section v-for="(module,moduleIndex) in moduleData" :key="moduleIndex" class="section-container">
      <p class="module-title"><span class="marker-site" /> {{ module.name }}</p>
      <img
        v-for="(item,index) in module.imgList"
        :key="index"
        class="img-item"
        :src="item"
        alt=""
      >
    </section>
    <!--
    <section>
      <video
        crossorigin="anonymous"
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
import { ref, onMounted } from 'vue'
export default {
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
  background-color: $main-white;
  padding: 1rem;
  height: 100%;
  .module-title{
    font-size: 14px;
    margin-bottom: .8rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    height: 22px;
    line-height: 18px;
    font-size: 18px;
  }
  .marker-site{
    height: 18px;
    width: 5px;
    margin-left: 5px;
    margin-right: 8px;
    border-radius: 1px;
    background-color: $main-color;
  }
  .img-item {
    display: inline-block;
    border-radius: 15px;
    height: 280px;
    width: 380px;
    margin-right: 12px;
    margin-bottom: 12px;
    transition: transform .5s;
  }
  .img-item:hover{
      box-shadow: 0 0 12px 0 rgba($color: #000000, $alpha: .3);
      transform: scale(1.05,1.05);
  }
}
</style>
