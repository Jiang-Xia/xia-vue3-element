<!--
 * @Author: 酱
 * @LastEditors: 酱
 * @Date: 2021-07-14 09:36:05
 * @LastEditTime: 2021-07-14 15:52:17
 * @Description:
 * @FilePath: \xia-vue3-element\src\views\configs\components\edit-menu.vue
-->
<template>
  <el-dialog
    title="编辑菜单"
    width="30%"
    :before-close="handleClose"
  >
    <!-- 默认所有属性以及事件会绑定到根节点 -->
    <el-form label-position="right" label-width="100px" :model="routerData">
      <el-form-item label="标题">
        <el-input v-model="routerData.title" size="small" />
      </el-form-item>
      <el-form-item label="是否隐藏">
        <el-radio v-model="routerData.hidden" :label="true">是</el-radio>
        <el-radio v-model="routerData.hidden" :label="false">否</el-radio>
      </el-form-item>
      <el-form-item label="图标">
        <el-input v-model="routerData.icon" :prefix-icon="routerData.icon" size="small" />
      </el-form-item>
      <el-form-item label="路径">
        <el-input v-model="routerData.path" size="small" />
      </el-form-item>
      <el-form-item label="vue文件路径">
        <el-input v-model="routerData.component" size="small" />
      </el-form-item>
      <el-form-item label="重定向">
        <el-input v-model="routerData.redirect" size="small" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button size="medium" @click="handleClose">取 消</el-button>
        <el-button size="medium" type="primary" @click="confirmHandle">确 定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import { reactive, ref, watch } from 'vue'
// setup 这个函数是在beforeCreate和created之前运行的,所以你可以用它来代替这两个钩子函数。
export default {
  props: {
    params: {
      default: () => {},
      type: Object
    }
  },
  setup(props, context) {
    const init = () => {}
    const confirmHandle = () => {
      console.log(routerData)
      handleClose()
    }
    const handleClose = () => {
      // 触发事件更新v-model绑定值
      context.emit('update:modelValue', false)
    }
    //  这个要一个个把对象的key重赋值
    const routerData = reactive({})
    //  这个只需要重赋值routerData.value即可
    // const routerData = ref({})
    // 监听
    watch(
      () => props.params,
      (n, o) => {
        const { row } = n
        const { name, title, path, hidden = false, icon, redirect, component } = row
        const obj = {
          name,
          title,
          path,
          icon,
          redirect: redirect && redirect.path,
          component,
          hidden
        }
        for (const k in obj) {
          routerData[k] = obj[k]
        }
        // routerData.value = obj
      }
    )
    /* https://vue3js.cn/docs/zh/api/computed-watch-api.html#computed */
    // 监听绑定的表单数据（可以监听整个对象或者只监听对象的一个key）
    watch(
      () => routerData,
      (n, o) => {
        // console.log(n)
      }
    )
    return {
      confirmHandle,
      handleClose,
      routerData
    }
  }
}
</script>

<style lang='scss' scoped>
.new-container{

}
</style>
