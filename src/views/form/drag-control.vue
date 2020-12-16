<template>
  <div class="form-container">
    <aside class="aisde-control">
      <div class="field-heading">基础字段</div>
      <draggable
        class="component-list"
        :list="controlList"
        :group="{ name: 'control', pull: 'clone', put: false }"
        :sort="false"
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
          group="control"
          item-key="id"
          @change="layoutChangeHandle"
        >
          <template #item="{ element }">
            <div
              class="control-item"
              :class="curControlItemId===element.id?'active':''"
              @click="clickControlItemHandle(element)"
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
// const idGlobal = 4
const controlList = [
  { name: '短文本',
    type: 'input',
    id: 1
  },
  { name: '长文本',
    type: 'textarea',
    id: 2
  },
  { name: '多选题',
    type: 'select',
    id: 3
  },
  { name: '单选题',
    type: 'radio',
    id: 4
  }
]
// taget layout
const layoutList = []
export default {
  components: {
    draggable
  },
  setup() {
    const drag = ref(false)
    const activeName = ref('first')
    return {
      drag,
      activeName
    }
  },
  data() {
    return {
      controlList,
      layoutList,
      curControlItemId: 0
    }
  },
  methods: {
    clickControlItemHandle(element) {
      this.curControlItemId = element.id
      console.log(element)
    },
    cloneControlHandle(data) {
      const obj = {
        textarea: '长文本',
        input: '短文本',
        select: '多选题',
        radio: '单选题'
      }
      return {
        id: new Date().getTime(),
        name: obj[data.type],
        type: data.type
      }
    },
    logHandle(e) {
      console.log(e)
    },
    layoutChangeHandle(e) {
      console.log(this.layoutList)
      if (e.added && e.added.element) {
        this.curControlItemId = e.added.element.id
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "~@/styles/scss/_mixins";
@import "./common.scss";
.form-container{
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
    }
}
</style>
