import { asyncRoutes, constantRoutes } from '@/router'
// import store from '@/store'
import { convertRouter } from '@/utils/handleRoutes'
/**
 * Use meta.role to determine if the current user has permission
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes, roles) {
  const res = []
  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })

  return res
}

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

/*
 * 相当于后端返回的路由表
 *
*/
const BackendRoutes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: '@/layout/index',
    redirect: { path: '/dashboard/index' },
    meta: {
      title: '首页',
      roles: [1, 2]
    },
    children: [
      {
        path: 'index',
        name: 'DashboardResultQuery',
        component: '@/views/dashboard/index',
        meta: {
          activeMenu: '/dashboard'
        }
      }
    ]
  },
  {
    path: '/demo',
    name: 'Demo',
    component: '@/layout/index',
    redirect: { path: '/demo/index' },
    meta: {
      title: '测试',
      roles: [1, 2]
    },
    children: [
      {
        path: 'theme',
        component: '@/views/demo/theme',
        meta: {
          activeMenu: '/demo/theme',
          title: '换肤'
        }
      },
      {
        path: 'index',
        component: '@/views/demo/index',
        meta: {
          activeMenu: '/demo/index',
          title: 'demo'
        }
      },
      {
        path: 'step',
        component: '@/views/demo/step/index',
        meta: {
          activeMenu: '/demo/step',
          title: '步骤'
        }
      }
    ]
  }
]
const actions = {
  generateRoutes({ commit }, roles) {
    return new Promise(resolve => {
      let accessedRoutes
      if (roles.includes(2)) {
        // 全部路由
        accessedRoutes = asyncRoutes
      } else {
        accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
      }
      // console.log(accessedRoutes)
      commit('SET_ROUTES', accessedRoutes)
      // console.log('=================', accessedRoutes, '=================')
      resolve(accessedRoutes)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
