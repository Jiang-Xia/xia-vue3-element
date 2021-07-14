<!--
 * @Author: 酱
 * @LastEditors: 酱
 * @Date: 2021-07-07 09:14:11
 * @LastEditTime: 2021-07-14 14:45:47
 * @Description:
 * @FilePath: \xia-vue3-element\src\views\configs\menu.vue
-->
<template>
  <div class="configs-container">
    <section class="configs-content">
      <el-table
        :data="tableData"
        style="width: 100%;margin-bottom: 20px;"
        height="100%"
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
          width="145"
        >
          <template #default="props">
            <el-button size="mini" type="primary" @click="operateHandle('edit',props)">编辑</el-button>
            <el-button size="mini" type="danger" @click="operateHandle('del',props)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </section>
    <EditDialog v-model="editDialog" :params="rowProps" />
  </div>
</template>
<script>
// import { useStore } from 'vuex'
// import { useRoute } from 'vue-router'
// import { computed, ref, reactive, onMounted } from 'vue'
import { getUserRoutes } from '@/api/common'
import EditDialog from './components/edit-menu.vue'
export default {
  components: {
    EditDialog
  },
  setup() {
    return {
      // tableData: reactive([])
    }
  },
  data() {
    return {
      tableData: [],
      editDialog: false,
      rowProps: {}
    }
  },
  watch: {
    editDialog(n) {
      // console.log(n, 111)
    }
  },
  created() {
    getUserRoutes().then(res => {
      // console.log(res.data.routes)
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
      this.rowProps = props
      // console.log(props)
      if (type === 'del') {
        this.$confirm('此操作将删除该菜单项, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.tableData.splice(props.$index, 1)
          this.$message.success('删除成功')
        }).catch(() => {
          this.$message.info('已取消删除')
        })
      } else if (type === 'edit') {
        this.editDialog = true
      }
    }
  }
}
</script>
<style lang="scss" scoped>
/*
  防止border-radius被遮住，需要 overflow 设置auto, hidden, scroll配合使用;
  https://www.cnblogs.com/sanshi/p/9712426.html
*/
.configs-container{
  background-color: #fff;
  height: 100%;
  border-radius: $border-radius;
  overflow: hidden;
  .configs-content{
    height: 100%;
  }
}
</style>
