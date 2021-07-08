<!--
 * @Author: 酱
 * @LastEditors: 酱
 * @Date: 2021-07-02 09:38:08
 * @LastEditTime: 2021-07-08 15:20:19
 * @Description:
 * @FilePath: \xia-vue3-element\src\components\scroll-view\index.vue
-->
<template>
  <div ref="listView" class="list-view" @scroll="handleScroll($event)">
    <div class="list-view-phantom" :style="{ height: listData.length * itemHeight + 'px' }" />
    <div ref="content" class="list-view-content">
      <!-- 默认渲染和自定义渲染的列表item -->
      <template
        v-for="(item,index) in visibleData"
      >
        <slot v-if="$slots.listItem" name="listItem" :listItem="item" />
        <div v-else :key="index" class="list-view-item">
          <span>{{ item.value }}</span>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // 列表ite的高度，不然计算不了
    itemHeight: {
      type: Number,
      default: 30
    },
    // 列表总数据
    listData: {
      default: () => [],
      type: Array
    }
  },
  data() {
    return {
      start: 0,
      end: null,
      visibleCount: null,
      visibleData: [],
      scrollTop: 0
    }
  },
  mounted() {
    // console.log(this.$slots.listItem)
    this.visibleCount = Math.ceil(this.$refs.listView.clientHeight / this.itemHeight)
    this.start = 0
    this.end = this.start + this.visibleCount
    this.visibleData = this.listData.slice(this.start, this.end)
  },
  methods: {
    handleScroll(event) {
      const scrollTop = this.$refs.listView.scrollTop
      const fixedScrollTop = scrollTop - scrollTop % 30
      //   console.log(scrollTop, scrollTop % 30, fixedScrollTop)
      this.$refs.content.style.webkitTransform = `translate3d(0, ${fixedScrollTop}px, 0)`

      this.start = Math.floor(scrollTop / 30)
      this.end = this.start + this.visibleCount
      this.visibleData = this.listData.slice(this.start, this.end)
    }
  }
}
</script>

<style lang="scss" scoped>
  .list-view {
    min-height: 400px;
    height: 100%;
    overflow: auto;
    position: relative;
    // border: 1px solid #9b9b9b;
    border-radius: 2px;
    // box-shadow: 0 0 5px rgba($color: #000000, $alpha: .2);
    .list-view-phantom {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        z-index: -1;
    }
    .list-view-content {
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        position: absolute;
    }
    .list-view-item {
        padding: 0 3px;
        margin: 8px 0;
        border-radius: 3px;
        // box-shadow: 0 0 5px rgba($color: #000000, $alpha: .2);
        color: #666;
        height: 40px;
        line-height: 40px;
        box-sizing: border-box;
    }
  }
</style>
