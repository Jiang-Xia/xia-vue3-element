<template>
  <el-container class="xia-app-container">
    <!-- 侧边栏开始 -->
    <el-aside width="200px">
      <div class="logo ellipsis">
        {{ globalConfigs.site_config.global_site_title }}
      </div>
      <el-scrollbar class="xia-scrollbar">
        <el-menu
          :unique-opened="true"
          class="el-menu-vertical"
          :default-active="defaultActive"
          background-color="#343837"
          text-color="#fff"
          active-text-color="#fff"
          :collapse="collapsed"
          :router="true"
        >
          <template v-for="(item) in permission_routes">
            <el-menu-item
              v-if="item.children.length===1"
              :key="item.path"
              :data-index_="item.path"
              class="me-item"
              :index="item.path"
            >
              <svg-icon :icon-class="item.path.substring(1)" />
              <span
                v-show="!collapsed"
                style="margin-left:0.5rem;"
              >{{ item.meta.title }}</span>
            </el-menu-item>
            <el-submenu
              v-else
              :key="item.path"
              :index="item.path"
            >
              <template #title>
                <svg-icon :icon-class="item.path.substring(1)" />
                <span
                  v-show="!collapsed"
                  style="margin-left:0.5rem;"
                >{{ item.meta.title }}</span>
              </template>
              <el-menu-item
                v-for="(item2) in item.children"
                :key="item2.meta.activeMenu"
                class="submenu-item"
                :index="item.path+'/'+item2.path"
                :data-index_="item.path+'/'+item2.path"
              >
                <span>{{ item2.meta.title }}</span>
              </el-menu-item>
            </el-submenu>
          </template>
        </el-menu>
      </el-scrollbar>
    </el-aside>
    <!-- 侧边栏结束 -->
    <el-container>
      <!-- 导航头开始 -->
      <el-header height="50px">
        <Breadcrumb />
        <div class="user-wrap fr">
          <i class="user-icon fas fa-user-circle" />
          <el-dropdown v-if="userInfo.truename" @command="commandHandle">
            <span class="el-dropdown-link">
              {{ userInfo.truename }}
              <i class="el-icon-arrow-down el-icon--right" />
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item :command="1">个人中心</el-dropdown-item>
                <el-dropdown-item :command="3">修改密码</el-dropdown-item>
                <el-dropdown-item :command="2">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <span v-else class="login" @click="loginHandle">请登录</span>
        </div>
      </el-header>
      <!-- 导航头结束 -->

      <el-main>
        <router-view v-slot="{ Component }">
          <transition
            name="fade-transform"
            mode="out-in"
          >
            <component
              :is="Component"
            />
          </transition>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import Breadcrumb from '@/components/breadcrumb'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import router from '@/router'
import store from '@/store'
import { getCode } from '@/utils/common'
import { getInfo } from '@/utils/cookie'
import Logout from './logout'
// import { reactive, computed, ref, watchEffect, watch } from 'vue'
import{ ElAlert }from 'element-plus'
import {computed, ref } from 'vue'
function handleSelect(i, path) {
  console.log(i, path)
  // 切换导航清空条件
  router.push({ path: i })
}
// 头像下拉命令
function commandHandle(v) {
  if (v === 2) {
    logoutHandle()
  } else if(v === 3) {
    Logout.init()
  }else {
    router.push('/profile')
  }
}
    // 退出登录
function logoutHandle() {
    store.dispatch('user/logout').then(() => {
      this.$alert('确认退出', '提示', {
        confirmButtonText: '确认',
        showCancelButton: false,
        showClose: false,
        callback: () => {
          logoutRedirectControl()
        }
      })
    })
}
// 退出跳转控制
function logoutRedirectControl() {
  const code = getCode()
  switch (code) {
    case 'gyfy_117' :
      break
    default:
      location.reload()
      break
  }
}
export default {
  components: {
    Breadcrumb
  },
  setup() {
    const store = useStore()
    const route = useRoute()
    /* computed */
    // 选中高亮
    const defaultActive = computed(() => {
      // console.log(route.meta)
      return route.meta.activeMenu
    })
    const key = computed(() => {
      return route.path
    })
    const userInfo = computed(() => {
      console.log(getInfo())
      return getInfo()
    })
    /* state */
    const collapsed = ref(false)
    return {
      permission_routes: store.getters.permission_routes.filter(v => !v.hidden),
      userInfo: userInfo,
      globalConfigs: store.getters.globalConfigs,
      defaultActive,
      collapsed,
      handleSelect,
      commandHandle,
      key
    }
  },
  methods:{
  }
}
</script>
<style lang="scss">
@import "~@/styles/scss/_mixins";
.xia-app-container{
  height: 100%;
  background-color: #f9f9f9;
  .el-aside{
    background-color: #343837;
  }
  .el-header{
    background-color: #fff;
    margin-bottom: 2px;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);
  }
  .el-main{

  }
  .el-menu-vertical{
    border-right: solid 1px #343837;
   .el-menu-item{
      background-color: #343837 !important;
      font-size: 16px;
      // height: 60px;
      // line-height: 60px;
      position: relative;
      &::after{
        transition: .3s;
        content: '';
        display: none;
        width: 6px;
        position: absolute;
        height: 100%;
        top: 0;
        left: 0;
        background-color:#0F9B8E;
      }
    }
    .el-menu-item:hover{
      background-color: #03719C !important;
    }
    .el-menu-item.is-active{
      background-color: #03719C !important;
      font-size: 18px;
      &::after{
        display: block;
      }
    }
   .el-submenu__title{
      font-size: 16px;
      i{
        color: #fff;
        font-size: 14px;
      }
    }
  }
  .xia-scrollbar{
    height: calc(100% - 50px);
    width: 100%;
  }
  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 9px;
    font-size: 14px;
    text-align: center;
    line-height: 32px;
    color: #fff;
    // color: #03719C;
  }
  .user-wrap{
      height: 100%;
      // line-height: 50px;
      padding-right: 1rem;
      text-align: right;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: $main-text-color;
      font-size: 14px;
      .user-icon{
        color: #909399;
        margin: 0 10px;
        font-size: 24px;
      }
      .login:hover{
        color: $main-color;
      }
      .login{
        cursor: pointer;
      }
   }
}
</style>
