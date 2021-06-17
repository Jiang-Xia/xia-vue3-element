<!--
 * @Author: 江夏
 * @LastEditors: 江夏
-->
<template>
  <div class="configs-container">
    <section class="configs-content">
      <el-table
        :data="tableData"
        style="width: 100%;margin-bottom: 20px;"
        row-key="id"
        border
        default-expand-all
        :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
      >
        <el-table-column
          prop="name"
          label="name"
        />
        <el-table-column
          prop="path"
          label="路径"
        />
        <el-table-column
          prop="hidden"
          label="是否隐藏"
        />
        <el-table-column
          prop="component"
          label="vue文件路径"
        />
        <el-table-column
          label="重定向"
        >
          <template #default="props">
            {{ props.row.redirect }}
          </template>
        </el-table-column>

        <el-table-column
          label="标题"
        >
          <template #default="props">
            {{ props.row.meta.title }}
          </template>
        </el-table-column>

        <el-table-column
          label="图标"
        >
          <template #default="props">
            <span :class="props.row.icon" />
          </template>
        </el-table-column>

        <el-table-column
          label="操作"
        >
          <template #default="props">
            <el-button size="mini" type="primary">编辑</el-button>
            <el-button size="mini" type="danger">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </section>
  </div>
</template>
<script>
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { computed, ref, onCreated, onMounted } from 'vue'
export default {
  setup() {
    return {
      tableData: []
    }
  },
  created() {
    const store = useStore()
    const routes = store.getters.menuRoutes
    // this.tableData = [...routes]
    // console.log(routes)
  }
}
</script>
<style lang="scss" scoped>
.configs-container{
  background-color: #fff;
  height: 100%;
  overflow: auto;
  .configs-content{
    margin: 1.5rem;
    box-shadow: $main-box-shadow;
  }
}
</style>
