<!--
 * @Author: 酱
 * @LastEditors: 酱
 * @Date: 2021-07-08 15:09:38
 * @LastEditTime: 2021-07-14 17:44:11
 * @Description:
 * @FilePath: \xia-vue3-element\src\views\component\custom\components\long-list.vue
-->
<template>
  <div class="long-list-container">
    <div class="list-heading">
      随机人口卡片信息
    </div>
    <ScrollView :list-data="listData">
      <template #listItem="slotProps" :itemHeight="170">
        <div class="custom-item-wrap">
          <div
            v-for="(item) in slotProps.listItem"
            :key="item.id1"
            class="custom-item"
            :style="{
              backgroundColor:colorRgb(item.color),
              boxShadow:`0 0 5px ${colorRgb(item.color)}`,
            }"
          >
            <div class="base-info">
              <p
                class="name center"
                :style="{
                  backgroundColor:item.color,
                  boxShadow:`0 0 8px ${item.color}`,
                }"
              >
                {{ item.china_name }}
              </p>
              <p class="age center">{{ item.age }}</p>
            </div>
            <div class="card-content">
              <p>登记日期：{{ item.date }}</p>
              <p>所属省份：{{ item.province }}</p>
            </div>
          </div>
        </div>
      </template>
    </ScrollView>
  </div>
</template>

<script>
import Mock from 'mockjs'
const Random = Mock.Random
// mock 基本数据类型
const mockData = () => {
  const china_first = Random.cfirst()
  return {
  // 中文名字 | 姓 | 名
    china_name: Random.cname(),
    // 英文名 | firatname | lastname | 带中间字的
    eng_name: Random.name(),
    china_first,
    china_last: Random.clast(),
    // 数字 最小1 最大100
    age: Random.integer(1, 100),
    // 日期 YYYY-MM-DD
    date: Random.date(),
    color: Random.color(),
    color2: Random.color(),
    province: Random.province(),
    // image: Random.image('200x100', '#31b5c3', '#FFF', 'png', china_first),
    // 全局自增ID
    id1: Random.increment()
  }
}
import ScrollView from '@/components/scroll-view'
import { colorRgb } from '@/utils/tool'
export default {
  components: {
    ScrollView
  },
  data() {
    const listData = []
    for (let i = 0; i < 400; i++) {
      listData.push([mockData(), mockData(), mockData(), mockData()])
    }
    return {
      listData
    }
  },
  methods: {
    getListItem(listItem) {
      return listItem.value
    },
    colorRgb(color) {
      color = colorRgb(color)
      color = color.replace(')', ',0.5)')
      return color
    }
  }
}
</script>

<style lang="scss" scoped>
.long-list-container{
  height: 100%;
  background-color: #fff;
  height: 550px;
  .list-heading{
    padding-bottom: 12px;
    text-indent: 1em;
    border-bottom: 1px dashed $main-border-color;
  }
  .custom-item-wrap{
    padding: 10px;
    height: 170px;
    display: flex;
    justify-content: space-around;
  }
  .custom-item{
    width: 32%;
    width: 240px;
    height: 100%;
    border-radius: 12px;
    // background-color: #4c3aaa;
    // box-shadow: 0 0 8px rgba($color:#4c3aaa, $alpha: 0.28);
    // border: 1px solid $main-border-color;
    padding: 16px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    .base-info{
      width: 100%;
      display: flex;
      justify-content: space-between;
      // border-bottom: 1px dashed $main-border-color ;
    }
    .name{
      height: 50px;
      width: 50px;
      border-radius: 50%;
      color: #fff;
      transition: transform 1s ease-in-out;
      cursor: pointer;
      // font-size: 18px;
    }
    .name:hover{
      transform: rotateZ(1440deg) scale(1.3,1.3);
    }
    .age{
      font-size: 28px;
      color: #fff;
    }
    .card-content{
      flex: 1;
      padding-left: 8px;
      color: $main-color-text;
      display: flex;
      flex-direction: column;
      &>p{
        margin-top: 12px;
      }
    }
  }
}
</style>
