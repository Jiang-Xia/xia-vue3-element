<!--
 * @Author: 酱
 * @LastEditors: 酱
 * @Date: 2021-07-01 20:03:04
 * @LastEditTime: 2021-07-06 22:30:44
 * @Description:
 * @FilePath: \xia-vue3-element\src\layout\index.vue
-->
<template>
  <el-container class="xia-app-container">
    <!-- 侧边栏开始 -->
    <el-aside :width="!collapsed?'240px':'60px'">
      <div class="logo ellipsis">
        {{ globalConfigs.site_config.global_site_title }}
      </div>
      <el-scrollbar class="xia-scrollbar">
        <el-menu
          :unique-opened="true"
          class="xia-menu-vertical"
          :class="collapsed?'collapsed':''"
          :default-active="defaultActive"
          background-color="transparent"
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
              <p class="me-item-icon" :class="item.meta.icon" />
              <span
                v-show="!collapsed"
                style="margin-left:0.5rem;"
              >{{ item.title }}</span>
            </el-menu-item>
            <el-submenu
              v-else
              :key="item.path"
              :index="item.path"
              popper-class="xia-submenu__popper"
            >
              <template #title>
                <p class="me-item-icon" :class="item.meta.icon" />
                <span
                  v-show="!collapsed"
                  style="margin-left:0.5rem;"
                >{{ item.title }}</span>
              </template>
              <el-menu-item
                v-for="(item2) in item.children"
                :key="item2.meta.activeMenu"
                class="submenu-item"
                :index="item.path+'/'+item2.path"
                :data-index_="item.path+'/'+item2.path"
              >
                <span>{{ item2.title }}</span>
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
          <span
            class="fl collapsed-btn"
            style="padding:4px;"
            :class="!collapsed?'el-icon-s-fold':'el-icon-s-unfold'"
            size="mini"
            plain
            @click="collapsed=!collapsed"
          />
        </div>
        <Breadcrumb />
        <div class="user-wrap fr">
          <el-dropdown v-if="userInfo.truename" @command="commandHandle">
            <span class="el-dropdown-link">
              <div class="fl user-img"><img src="@/assets/img/common/boy.png" alt="头像"></div>
              <span v-show="!isMobile" class="username fr">
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
          <span class="xia xia-expand-arrows-alt" />
        </div>
      </el-header>
      <!-- 导航头结束 -->

      <!-- app主要内容开始 -->
      <el-main>
        <div class="xia-app__content">
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
        </div>
      </el-main>
      <!-- app主要内容结束 -->
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
      // console.log(getInfo())
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
      // console.log('======全部路由表======')
      // console.log(router.options.routes)
      // console.log('======全部路由表======')
      mobileCallBack()
      window.addEventListener('resize', mobileCallBack)
    })
    // 不被隐藏的渲染
    const permission_routes = store.getters.permission_routes.filter(v => {
      if (v.children && v.children.length) {
        v.children = v.children.filter(v2 => !v2.hidden)
      }
      return !v.hidden
    })
    // console.log(permission_routes)
    return {
      permission_routes,
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
$menu-gradient-bgc:linear-gradient(to top, #30cfd0 0%, #330867 100%);
$menu-gradient-active:linear-gradient(90deg, #30cfd0 0%, #009efd 100%);
.xia-submenu__popper{
  background-image: $menu-gradient-bgc;
  .el-menu-item{
    color: $main-white;
    height: 40px;
    line-height: 40px;
  }
  .el-menu-item:hover{
    background-image: $menu-gradient-active;
  }
}
.xia-app-container{
  height: 100%;
  background-color: #f6f7fc;
  .el-aside{
    background-image: $menu-gradient-bgc;
  }
  .el-header{
    background-color: $main-bgc;
    // background-image: linear-gradient(15deg, #80d0c7 0%, #13547a 100%);
    margin-bottom: 2px;
    padding: 0 0.7rem;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);
  }
  .el-main{
    // padding: 0;
    padding: 12px;
  }
  .xia-app__content{
    height: 100%;
    background-color: $main-white;
    // 后代元素有背景色的话会遮住圆角
    border-radius: $border-radius;
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
  .collapsed-btn{
    font-size: 18px;
    cursor: pointer;
  }
  .collapsed-btn:hover,.collapsed-btn:focus,.collapsed-btn:active{
    color: $main-color;
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
  .user-img{
    width: 32px;
    margin-right: 4px;
    img{
      width: 100%;
    }
   }
   .username{
     margin-top: 9px;
   }
  .me-item-icon{
    display: inline-block;
  }
  // 折叠菜单栏
  .el-menu--collapse > .el-menu-item, .el-menu--collapse > .el-submenu > .el-submenu__title{
    padding: 0 17px !important;
  }
   /* 自定义菜单栏 开始*/
  .xia-menu-vertical{
    // background-color: #fafafa;
    border-right: solid 1px #343837;
    width: 85%;
    // margin: 0 auto;
    margin-left: 17px;
    background: none;
    border-right: none;
    &>.el-menu-item{
      box-sizing: border-box;
      height: 40px;
      line-height: 40px;
      background-color: transparent !important;
      // border: 1px solid #f9f9f9;
      border-radius: 12px;
      color: $main-white !important;
      font-size: 14px;
      margin-bottom: 12px;
      text-align: left;
    }
    .el-menu-item:hover{
      background:none !important;
    }
    .el-menu-item.is-active{
      background-image: $menu-gradient-active !important;
      // border-color: transparent;
      color: $main-white !important;
      border: none;
      box-shadow: 0 0 4px $main-color;
      &::after{
        display: none;
      }
    }
    .el-submenu__icon-arrow{
      color: $main-white !important;
    }
    &>.el-submenu{
      box-sizing: border-box;
      min-height: 40px;
      background-color: transparent !important;
      // border-radius: 4px;
      // border: 1px solid #f9f9f9;
      color: $main-white !important;
      font-size: 14px;
      margin-bottom: 12px;
      .el-menu-item{
        box-sizing: border-box;
        width: 100%;
        height: 40px;
        line-height: 40px;
        background-color: transparent !important;
        border-radius: 12px;
        color: $main-white !important;
        font-size: 14px;
        margin-bottom: 12px;
        text-align: left;
        min-width: 189px;
      }
      &>.el-submenu__title{
        color: $main-white !important;
        height: 40px;
        line-height: 40px;
        // border-radius: 4px;
        background-color: transparent !important;
      }
      .el-menu-item.is-active{
        background-image: $menu-gradient-active !important;
        color: $main-white !important;
        &::after{
          display: none;
        }
      }
    }
    .el-menu{
      border-radius: 0 0 4px 4px;
    }
  }
  .xia-menu-vertical.collapsed{
    margin-left:6px;
  }
  /* 菜单栏 结束 */
}
</style>
