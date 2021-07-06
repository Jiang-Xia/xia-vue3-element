/*
 * @Author: 酱
 * @LastEditors: 酱
 * @Date: 2021-06-27 20:17:00
 * @LastEditTime: 2021-07-06 22:11:53
 * @Description:
 * @FilePath: \xia-vue3-element\src\permission.js
 */
import router from '@/router'
import store from '@/store'
// import { Message } from 'element-plus'
import { getToken } from '@/utils/cookie' // get token from cookie
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getPageTitle } from '@/utils/common'

const whiteList = ['/login', '/index', '/404']
router.beforeEach(async(to, from, next) => {
  // next函数 进行管道中的一个钩子，如果执行完了，则导航的状态就是 confirmed （确认的）；否则为false，终止导航。
  NProgress.start()
  const hasToken = getToken()
  // console.log(1111, to.path)
  document.title = getPageTitle(to.title)
  if (!hasToken) {
    store.dispatch('user/resetToken')
    // 未登录
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
    }
  } else {
    // 已登录
    // console.log('已登录', store.getters.roles)
    if (to.path === '/login') {
      next({ path: '/dashboard' })
      NProgress.done()
    } else {
      const hasRoles = store.getters.roles && store.getters.roles.length > 0
      if (hasRoles) {
        next()
      } else {
        try {
          const res = await store.dispatch('user/getUserInfo')
          const { user_type } = res[0]
          const accessRoutes = await store.dispatch('permission/generateRoutes', [user_type])
          for (const item of accessRoutes) {
            router.addRoute('', item)
          }
          next({ ...to, replace: true })
        } catch (error) {
          console.log(error)
          await store.dispatch('user/resetToken')
          next(`/login?redirect=${to.path}`)
        }
      }
    }
  }
})
router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
