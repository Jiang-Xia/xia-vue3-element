<!--
 * @Author: 酱
 * @LastEditors: 酱
 * @Date: 2021-07-07 09:14:11
 * @LastEditTime: 2021-07-07 09:14:46
 * @Description:
 * @FilePath: \xia-vue3-element\src\views\configs\menu.vue
-->

<template>
  <div class="configs-container">
    <section class="configs-content">
      <el-table
        :data="tableData"
        style="width: 100%;margin-bottom: 20px;"
        :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
        row-key="path"
        border
      >
        <el-table-column
          prop="name"
          label="name"
          width="auto"
        />

        <el-table-column
          label="隐藏"
          width="50px"
        >
          <template #default="props">
            {{ props.row.hidden?'是':'否' }}
          </template>
        </el-table-column>

        <el-table-column
          label="图标"
          width="50px"
        >
          <template #default="props">
            <span :class="props.row.icon" />
          </template>
        </el-table-column>

        <el-table-column
          label="标题"
        >
          <template #default="props">
            {{ props.row.title }}
          </template>
        </el-table-column>

        <el-table-column
          prop="path"
          label="路径"
        />

        <el-table-column
          prop="component"
          label="vue文件路径"
        />
        <el-table-column
          label="重定向"
        >
          <template #default="props">
            {{ props.row.redirect?props.row.redirect.path:'' }}
          </template>
        </el-table-column>

        <el-table-column
          label="操作"
        >
          <template #default="props">
            <el-button size="mini" type="primary" @click="operateHandle('edit',props)">编辑</el-button>
            <el-button size="mini" type="danger" @click="operateHandle('del',props)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </section>
  </div>
</template>
<script>
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { computed, ref, reactive, onCreated, onMounted } from 'vue'
import { getUserRoutes } from '@/api/common'
export default {
  setup() {
    return {
      // tableData: reactive([])
    }
  },
  data() {
    return {
      tableData: []
    }
  },
  created() {
    getUserRoutes().then(res => {
      console.log(res.data.routes)
      this.tableData = res.data.routes.map(v => {
        // if (v.children && v.children.length) {
        //   v.hasChildren = true
        // }
        return v
      })
    })
  },
  methods: {
    operateHandle(type, props) {

    }
  }
}
</script>
<style lang="scss" scoped>
.configs-container{
  background-color: #fff;
  height: 100%;
  border-radius: $border-radius;
  overflow: auto;
  .configs-content{
    // margin: 1.5rem;
    // box-shadow: $main-box-shadow;
  }
}
</style>
