import { constantRoutes } from '@/router'
// import store from '@/store'
// import { convertRouter } from '@/utils/handleRoutes'
import Layout from '@/layout'
import { getUserRoutes } from '@/api/common'

/**
 * Use meta.role to determine if the current user has permission
 * @param roles
 * @param route
 */
// function hasPermission(roles, route) {
//   if (route.meta && route.meta.roles) {
//     return roles.some(role => route.meta.roles.includes(role))
//   } else {
//     return true
//   }
// }
/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes) {
  const res = []

  routes.forEach((route = {}) => {
    // console.log(route, route.component, 1111111111111111111111111)
    const component = route.component
    /*
      动态路由使用注意事项
      https://next.router.vuejs.org/zh/guide/advanced/lazy-loading.html
    */
    const tmp = {
      path: route.path,
      /* 
      * https://webpack.docschina.org/api/module-methods/#dynamic-expressions-in-import
      * @/views 意思就是告诉 webpack全部打包views文件目录下的所有文件 
      * 两种方法导入都可以，import方法eslint报错  require不报错
      */
      component: component.includes('layout') ? 
      Layout : () => import(
      /* webpackChunkName: "async-component" */
      `@/views${component}`),
      // 路由分块打包的特殊注释，不写此注释vue-router会抛出警告
      /* webpackChunkName: "async" */
      // component: component.includes('layout') ?
      redirect: route.redirect || undefined,
      hidden: !!route.hidden,
      name: route.name,
      meta: {
        ...route.meta
      },
      children: route.children || undefined
    }
    tmp.title = route.title
    if (route.icon) {
      tmp.icon = route.icon
    }
    if (tmp.children) {
      if (tmp.children.length) {
        tmp.alwaysShow = true
      }
      tmp.children = filterAsyncRoutes(tmp.children)
    }
    res.push(tmp)
  })
  return res
}

// /**
//  * Filter asynchronous routing tables by recursion
//  * @param routes asyncRoutes
//  * @param roles
//  */
// export function filterAsyncRoutes(routes, roles) {
//   const res = []
//   routes.forEach(route => {
//     const tmp = { ...route }
//     if (hasPermission(roles, tmp)) {
//       if (tmp.children) {
//         tmp.children = filterAsyncRoutes(tmp.children, roles)
//       }
//       res.push(tmp)
//     }
//   })

//   return res
// }

const state = {
  routes: [],
  addRoutes: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  }
}

const actions = {
  generateRoutes({ commit }, roles) {
    return new Promise(resolve => {
      getUserRoutes().then(res=>{
        let accessedRoutes = res.data.routes
        // console.log('=================', accessedRoutes, '=================')
        if (roles.includes(2)) {
          // 全部路由
          accessedRoutes = accessedRoutes
        } else {
          accessedRoutes = filterAsyncRoutes(accessedRoutes, roles)
        }
        commit('SET_ROUTES', accessedRoutes)
        resolve(accessedRoutes)
      })

    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
