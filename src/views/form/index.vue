<template>
  <div class="form-container">
    <aside class="aisde-control">
      <div class="field-heading">基础字段</div>
      <draggable
        class="component-list"
        :list="controlList"
        :group="{ name: 'people', pull: 'clone', put: false }"
        :clone="cloneControlHandle"
        item-key="id"
        @change="logHandle"
      >
        <template #item="{element}">
          <div class="component-item">{{ element.name }}</div>
        </template>
      </draggable>
    </aside>
    <section class="main-layout">
      <div class="main-tool">
        <el-button
          size="mini"
          type="primary"
          icon="el-icon-edit"
        />
        <el-button
          size="mini"
          type="primary"
          icon="el-icon-share"
        />
        <el-button
          size="mini"
          type="primary"
          icon="el-icon-delete"
          @click="layoutList=[]"
        />
      </div>
      <div class="main-content">
        <draggable
          class="main-dragarea"
          :list="layoutList"
          group="people"
          item-key="id"
          @change="logHandle"
        >
          <template #item="{ element,index }">
            <div
              class="control-item"
              :class="curControlItemIndex===index?'active':''"
              @click="clickControlItemHandle(element,index)"
            >
              {{ element.name }}
            </div>
          </template>
        </draggable>
      </div>
    </section>
    <aside class="control-detail">
      <el-tabs v-model="activeName">
        <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      </el-tabs>
    </aside>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import { ref, reactive } from 'vue'
let idGlobal = 8
const controlList = [
  { name: 'dog 1', id: 1 },
  { name: 'dog 2', id: 2 },
  { name: 'dog 3', id: 3 },
  { name: 'dog 4', id: 4 }
]
// taget layout
const layoutList = [
  { name: 'cat 5', id: 5 },
  { name: 'cat 6', id: 6 },
  { name: 'cat 7', id: 7 }
]
export default {
  components: {
    draggable
  },
  setup() {
    const drag = ref(false)
    const activeName = ref('first')
    return {
      drag,
      logHandle,
      activeName
    }
  },
  data() {
    return {
      controlList,
      layoutList,
      curControlItemIndex: 0
    }
  },
  methods: {
    clickControlItemHandle(element, index) {
      this.curControlItemIndex = index
      console.log(element)
    },
    cloneControlHandle(data) {
      const id = data.id
      console.log(data)
      return {
        id: idGlobal++,
        name: `cat ${id}`
      }
    },
    logHandle(e) {
      console.log(e)
      this.curControlItemIndex = e.added.newIndex
    }
  }
}
</script>
<style lang="scss">
@import "~@/styles/scss/_mixins";
.form-container{
  background-color: #fff;
  // padding: 1rem .5rem;
  height: 100%;
  display: flex;

  /* global css */

  .el-tabs__item{
    height: 50px;
    line-height: 50px;
    padding: 0 .5rem;
  }
  /* global css */
  .aisde-control,.main-layout,.control-detail{
    height: 100%;
    overflow: auto;
    border-right: 1px solid #ebebeb;
  }
  .aisde-control{
    width: 14rem;
    .field-heading{
      text-align: center;
      padding: 1rem .5rem;
      color: #ccc;
    }
    .component-list{
      padding:  0 .5rem .5rem .5rem;
      .component-item{
        width: 48%;
        display: inline-block;
        margin: 1%;
        padding: .5rem;
        background-color: #EBEEF5;
        border-radius: 3px;
        border:1px dashed transparent;
      }
      .component-item:hover{
        border-color: $main-color;
      }
    }
  }
  .main-layout{
    flex: 1;
    .main-tool{
      height: 50px;
      padding: 10px;
      border-bottom: 1px solid #e4e7ed;
      box-shadow: 0 1px 4px rgba($color: #000000, $alpha: .1);
    }
    .main-content{
      height: calc(100% - 70px);
      margin: 10px;
      border:1px solid #ebebeb;
      box-shadow: 0 0 5px rgba($color: #000000, $alpha: .15);
      padding: .5rem;
      overflow: auto;
    }
    .main-dragarea{
      height: 100%;
    }
    .sortable-chosen.sortable-ghost{
      margin-top: 2px;
      background-color: #0F9B8E;
      color: transparent;
      height: 3px;
      border-radius: 3px;
    }
    .control-item{
      padding: 1rem .5rem;
      box-shadow: 0 0 5px rgba($color: #000000, $alpha: .15);
      border: 1px solid #e4e7ed;
      border-radius: 3px;
      margin-top: 1rem;
      cursor: pointer;
    }
    .control-item:hover{
      box-shadow: 0 0 5px rgba($color: $main-color, $alpha: .35);
    }
    .control-item.active{
      border: 2px dashed $main-color;
      box-shadow: 0 0 5px rgba($color: $main-color, $alpha: .35);
    }
  }
  .control-detail{
    width: 14rem;
  }
}
</style>
