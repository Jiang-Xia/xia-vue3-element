<!--
 * @Author: 酱
 * @LastEditors: 酱
 * @Date: 2021-07-08 15:09:38
 * @LastEditTime: 2021-07-08 17:00:27
 * @Description:
 * @FilePath: \xia-vue3-element\src\views\component\custom\components\long-list.vue
-->
<template>
  <div class="long-list-container">
    <div class="list-heading">
      随机人口卡片信息
    </div>
    <ScrollView :list-data="listData">
      <template #listItem="slotProps" :itemHeight="250">
        <div class="custom-item-wrap">
          <div
            v-for="(item) in slotProps.listItem"
            :key="item.id1"
            class="custom-item"
          >
            <div class="base-info center">
              <p
                class="name center"
                :style="{
                  backgroundColor:item.color,
                  boxShadow:`0 0 8px ${item.color}`,
                }"
              >
                {{ item.china_name }}
              </p>
            </div>
            <div class="card-content">
              <p>{{ item.color }}</p>
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
    // image: Random.image('200x100', '#31b5c3', '#FFF', 'png', china_first),
    // 全局自增ID
    id1: Random.increment()
  }
}
import ScrollView from '@/components/scroll-view'
export default {
  components: {
    ScrollView
  },
  data() {
    const listData = []
    for (let i = 0; i < 400; i++) {
      listData.push([mockData(), mockData(), mockData()])
    }
    return {
      listData
    }
  },
  methods: {
    getListItem(listItem) {
      return listItem.value
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
    height: 46px;
    line-height: 46px;
    text-indent: 1em;
    border-bottom: 1px dashed $main-border-color;
  }
  .custom-item-wrap{
    padding: 10px;
    height: 250px;
    display: flex;
    justify-content: space-between;
  }
  .custom-item{
    width: 32%;
    height: 100%;
    border-radius: 12px;
    background-color: #fff;
    box-shadow: 0 0 8px rgba($color:#000, $alpha: 0.12);
    padding: 12px 8px;
    display: flex;
    justify-content: space-between;
    .base-info{
      min-width: 70px;
      width: 35%;
      border-right: 1px dashed $main-border-color ;
    }
    .name{
      height: 50px;
      width: 50px;
      border-radius: 50%;
      color: #fff;
      transition: transform 1s ease-in-out;
      cursor: pointer;
    }
    .name:hover{
      transform: rotateZ(1440deg) scale(1.3,1.3);
    }
    .card-content{
      flex: 1;
      padding-left: 8px;
    }
  }
}
</style>
