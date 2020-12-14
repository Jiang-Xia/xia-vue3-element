<template>
  <el-container class="xia-app-container">
    <!-- 侧边栏开始 -->
    <el-aside :width="!collapsed?'200px':'auto'">
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
        <div class="fl center" style="height:100%">
          <el-button class="fl" style="padding:4px;" :icon="!collapsed?'el-icon-s-fold':'el-icon-s-unfold'" size="mini" plain @click="collapsed=!collapsed" />
        </div>
        <Breadcrumb />
        <div class="user-wrap fr">
          <!-- <i class="user-icon fas fa-user-circle" /> -->
          <el-dropdown v-if="userInfo.truename" @command="commandHandle">
            <span class="el-dropdown-link">
              <svg-icon icon-class="user-icon" class="user-icon" />
              <span v-show="!isMobile">
                {{ userInfo.truename }}
                <i class="el-icon-arrow-down el-icon--right" />
              </span>
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
        <div style="height:100%" class="center fr pointer" @click="requestFullscreenHandle">
          <span class="fas fa-expand-arrows-alt" />
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
    <Logout ref="Logout" />
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
import { computed, ref, onMounted } from 'vue'
function handleSelect(i, path) {
  console.log(i, path)
  // 切换导航清空条件
  router.push({ path: i })
}
// 请求全屏
function requestFullscreenHandle() {
  if (document.fullscreenElement) {
    document.exitFullscreen()
  } else {
    document.documentElement.requestFullscreen()
  }
}
export default {
  components: {
    Breadcrumb,
    Logout
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
    const isMobile = computed(() => {
      return mobileCallBack()
    })
    // methods
    const mobileCallBack = () => {
      const width = window.innerWidth
      if (width < 900) {
        collapsed.value = true
      } else {
        collapsed.value = false
      }
      return width < 900
    }
    /* state */
    const collapsed = ref(false)
    onMounted(() => {
      // 自动收起和展开导航栏
      mobileCallBack()
      window.addEventListener('resize', mobileCallBack)
    })
    return {
      permission_routes: store.getters.permission_routes.filter(v => !v.hidden),
      userInfo: userInfo,
      globalConfigs: store.getters.globalConfigs,
      defaultActive,
      collapsed,
      handleSelect,
      key,
      isMobile,
      requestFullscreenHandle
    }
  },
  methods: {
    // 头像下拉命令
    commandHandle(v) {
      if (v === 2) {
        this.logoutHandle()
      } else if (v === 3) {
        this.$refs.Logout.init()
      } else {
        router.push('/profile')
      }
    },
    // 退出登录
    logoutHandle() {
      store.dispatch('user/logout').then(() => {
        this.$alert('确认退出', '提示', {
          confirmButtonText: '确认',
          showCancelButton: false,
          showClose: false,
          callback: () => {
            this.logoutRedirectControl()
          }
        })
      })
    },
    // 退出跳转控制
    logoutRedirectControl() {
      const code = getCode()
      switch (code) {
        case 'gyfy_117' :
          break
        default:
          location.reload()
          break
      }
    }
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
    padding: 0 0.7rem;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);
  }
  .el-main{
    padding: 0;
  }
  .el-menu-vertical{
    border-right: solid 1px #343837;
   .el-menu-item{
      // background-color: #343837 !important;
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
      // color:$nav-active-color;
    }
    .el-menu-item.is-active{
      background-color: #03719C !important;
      // color:$nav-active-color;
      font-size: 18px;
      &::after{
        display: block;
      }
    }
    .submenu-item{
      background-color: #2a2d2c !important;
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
