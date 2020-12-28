<template>
  <el-dialog
    v-model="previewVisible"
    title="预览"
    :close-on-click-modal="false"
    custom-class="xia-dialog-preview"
    top="5vh"
    width="80%"
    @close="closeHandle"
  >
    <section v-for="(item,index) in group_list" :key="item.id+index">
      <h2 class="dim-heading">{{ item.name }}</h2>
      <PreviewModel :field-temp="item.items" :dim-data="{}" />
    </section>
  </el-dialog>
</template>
<script>
import PreviewModel from './question-components/preview-model'
import FieldTemp from './睡眠呼吸监测.json'
export default {
  components: {
    PreviewModel
  },
  data() {
    return {
      previewVisible: false,
      group_list: []
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      const { group_list } = FieldTemp
      this.previewVisible = true
      this.group_list = group_list
      group_list.forEach((v, i) => {
        v.items.forEach((v2, i2) => {
          if (v2.type === 'long_text') {
            console.log('==============', v2)
          } else {
            // console.log('--------------', v2)
          }
        })
      })
      // console.log(group_list)
    },
    closeHandle() {
      this.previewVisible = false
    },
    modifyHandle() {

    }
  }
}
</script>
<style lang="scss">
@import "~@/styles/scss/_mixins";
.xia-dialog-preview{
  .el-dialog__body{
    height: 70vh;
    overflow: auto;
    padding: 1rem;
  }
  .dim-heading{
    margin-top: 1rem;
    font-weight: 600;
    font-size: 17px;
    color: $main-color;
    // text-indent: 1em;
  }
}
</style>
