<template>
  <div class="form-container">
    <!-- 侧边栏 -->
    <aside class="aisde-control">
      <div class="field-heading">基础控件</div>
      <section class="component-list ">
        <div
          v-for="(element) in controlList"
          :key="element.name+element.id"
          class="component-item"
          @click="addControlHandle(element)"
        >
          <span>{{ element.name }}</span>
          <span class="fr fas fa-plus-circle" />
        </div>
      </section>
    </aside>

    <!-- 题型区 -->
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
        <section class="scorll-wrap">
          <h1 class="question-heading">题型名称</h1>
          <draggable
            class="main-dragarea"
            :list="layoutList"
            group="control"
            item-key="id"
            @change="layoutChangeHandle"
          >
            <template #item="{ element,index }">
              <section
                class="control-item"
                :class="curControlItemId===element.id?'active':''"
                @click="clickControlItemHandle(element,index)"
              >
                <addQuestion
                  v-if="isAdding&&element.isAdd"
                  :add-data="curControlData"
                  @confirm="addConfirmHandle"
                  @cancel="addCancelHandle"
                />
                <div v-else>
                  <DimModel
                    :dim-data="element"
                  />
                </div>
              </section>
            </template>
          </draggable>
        </section>
      </div>
    </section>
    <!-- 详情区 -->
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
import addQuestion from './new-temp'
import DimModel from './question-components/question-model'
import { ref, reactive } from 'vue'
// const idGlobal = 4
const controlList = [
  { name: '长文本',
    type: 'long_text',
    id: 1
  },
  { name: '短文本',
    type: 'short_text',
    id: 2
  },
  { name: '多项选择',
    type: 'multiple_choice',
    id: 3
  },
  { name: '下拉多选',
    type: 'multiple_dropdown',
    id: 4
  },
  { name: '单选选择',
    type: 'single_choice',
    id: 5
  },
  { name: '下拉单选',
    type: 'single_dropdown',
    id: 6
  },
  { name: '文本描述',
    type: 'desp',
    id: 7
  }
]
// taget layout
const layoutList = []
export default {
  components: {
    draggable,
    addQuestion,
    DimModel
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
      controlList: controlList,
      layoutList: layoutList,
      curControlItemId: 0,
      curControlData: {},
      isAdding: false
    }
  },
  methods: {
    addControlHandle(item) {
      if (this.isAdding) {
        return
      }
      const id = item.id + new Date().getTime()
      this.curControlItemId = id
      const defaultObj = {
        id: id,
        topic: '',
        mark: '',
        value: '',
        isAdd: true
      }
      if (['multiple_choice', 'multiple_dropdown', 'single_choice', 'single_dropdown'].includes(item.type)) {
        defaultObj.options = [
          {
            value: 1,
            text_show: '选项一'
          },
          {
            value: 2,
            text_show: '选项二'
          }
        ]
      }
      if (['multiple_choice', 'multiple_dropdown'].includes(item.type)) {
        defaultObj.value = []
      }
      const obj = { ...item, ...defaultObj }
      this.curControlData = { ...obj }
      console.log(obj)
      this.layoutList.push(obj)
      this.isAdding = true
    },
    clickControlItemHandle(element) {
      // if (this.isAdding) {
      //   this.$forceUpdate()
      //   return
      // } else {
      //   this.curControlItemId = element.id
      //   this.curControlData = element
      //   this.isAdding = true
      //   this.$forceUpdate()
      // }
    },
    layoutChangeHandle(e) {
      if (e.added && e.added.element) {
        this.curControlItemId = e.added.element.id
      }
    },
    // 新增
    addConfirmHandle() {
      const id = this.curControlItemId
      this.layoutList = this.layoutList.map(v => {
        if (v.id === id) {
          const obj = { ...this.curControlData }
          obj.isAdd = false
          const obj_ = { ...v, ...obj }
          v = obj_
          this.isAdding = false
        }
        return v
      })
    },
    addCancelHandle() {
      const id = this.curControlItemId
      this.layoutList = this.layoutList.filter(v => v.id !== id)
      this.isAdding = false
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
        margin: 1%;
        padding: .5rem;
        background-color: #EBEEF5;
        border-radius: 3px;
        border:1px dashed transparent;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
  }
}
</style>
