import { createRouter, createWebHashHistory } from 'vue-router'
import Dashboard from '@/router/modules/dashboard'
import Charts from '@/router/modules/charts'
import Icon from '@/router/modules/icon'
import Nav from '@/router/modules/nav'
import Form from '@/router/modules/form'
import Demo from '@/router/modules/demo'
import Profile from '@/router/modules/profile'
// 固定路由
export const constantRoutes = [
  {
    path: '/login',
    name: 'login',
    hidden: true,
    component: () => import('@/views/login/index-transfer'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/',
    redirect: '/dashboard',
    hidden: true
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    name: '401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  }
]
// 异步路由根据权限配置
export const asyncRoutes = [
  Dashboard,
  Nav,
  Demo,
  Form,
  Charts,
  Icon,
  Profile,
  { path: '/:pathMatch(.*)', redirect: '/404', hidden: true }
]
export function resetRouter() {
  // const newRouter = createRouter()
  // router.matcher = newRouter.matcher
}
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})

export default router
