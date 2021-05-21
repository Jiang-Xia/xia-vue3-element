<template>
  <div class="long-list-container">
    <ScrollView :list-data="listData">
      <template #listItem="slotProps" :itemHeight="50">
        <div class="custom-item-wrap">
          <div class="custom-item">
            {{ getListItem(slotProps) }}
          </div>
        </div>
      </template>
    </ScrollView>
  </div>
</template>

<script>
import ScrollView from '@/components/scroll-view'
export default {
  components: {
    ScrollView
  },
  data() {
    const listData = []
    for (let i = 0; i < 4000; i++) {
      listData.push({ value: i })
    }
    return {
      listData
    }
  },
  methods: {
    getListItem(slotProps) {
      return slotProps.listItem.value
    }
  }
}
</script>

<style lang="scss" scoped>
.long-list-container{
  height: 100%;
  background-color: #fff;
  height: 700px;
  .custom-item-wrap{
    padding: 11px 17px;
    // margin-bottom: 7px;
  }
  .custom-item{
    background-color: #f7f7f7;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba($color:$main-color, $alpha: .26);
  }
}
</style>
