/*
 * @Author: 江夏
 * @Date: 2021-06-11 16:55:21
<<<<<<< HEAD
 * @LastEditTime: 2021-06-20 15:13:22
 * @LastEditors: 江夏
=======
 * @LastEditTime: 2021-07-01 11:51:38
 * @LastEditors: 酱
>>>>>>> 5ea87bcfefafa55e99e474955d353a6a1916389e
 * @Description: In User Settings Edit
 * @FilePath: \xia-vue3-element\src\mock\BackendRoutes.js
 */

export const BackendRoutes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: '@/layout/index',
    redirect: { path: '/dashboard/index' },
    icon: 'xia xia-home',
    meta: {
      title: '首页',
      roles: [1, 2]
    },
    children: [
      {
        path: 'index',
        name: 'DashboardResultQuery',
        component: '/dashboard/index',
        meta: {
          activeMenu: '/dashboard',
          title: '首页'
        }
      }
    ]
  },
  {
    path: '/demo',
    name: 'Demo',
    component: '@/layout/index',
    redirect: { path: '/demo/index' },
    icon: 'xia xia-demo',
    meta: {
      title: '测试',
      roles: [1, 2]
    },
    children: [
      {
        path: 'theme',
        component: '/demo/theme',
        meta: {
          activeMenu: '/demo/theme',
          title: '换肤'
        }
      },
      {
        path: 'index',
        component: '/demo/index',
        meta: {
          activeMenu: '/demo/index',
          title: 'demo'
        }
      },
      {
        path: 'step',
        component: '/demo/step/index',
        meta: {
          activeMenu: '/demo/step',
          title: '步骤'
        }
      }
    ]
  },
  {
    path: '/charts',
    name: 'Charts',
    component: '@/layout/index',
    redirect: { path: '/charts/index' },
    icon: 'xia xia-areachart',
    meta: {
      title: '图表',
      roles: [1, 2]
    },
    children: [
      {
        path: 'index',
        props: true,
        component: '/charts/index',
        meta: {
          title: '图表总览',
          activeMenu: '/charts/index'
        }
      },
      {
        path: 'graph',
        props: true,
        component: '/charts/graph',
        meta: {
          title: '图表库',
          activeMenu: '/charts/graph'
        }
      }
    ]
  },
  {
    path: '/form',
    name: 'Form',
    component: '@/layout/index',
    redirect: { path: '/form/index' },
    icon: 'xia xia-form',
    meta: {
      title: '表单',
      roles: [1, 2]
    },
    children: [
      {
        path: 'index',
        component: '/form/drag-control',
        meta: {
          activeMenu: '/form/index',
          title: '表单生成器'
        }
      },
      {
        path: 'question',
        component: '/form/question-type',
        meta: {
          activeMenu: '/form/question',
          title: '题型生成器'
        }
      }
    ]
  },
  {
    path: '/icon',
    name: 'Icon',
    component: '@/layout/index',
    redirect: { path: '/icon/index' },
    icon: 'xia xia-smile',
    meta: {
      title: '图标',
      roles: [1, 2]
    },
    children: [
      {
        path: 'index',
        component: '/icon/index',
        meta: {
          activeMenu: '/icon/index',
          title: 'custom'
        }
      },
      {
        path: 'svg',
        component: '/icon/svg',
        meta: {
          activeMenu: '/icon/svg',
          title: 'SVG'
        }
      },
      {
        path: 'fa',
        component: '/icon/fa',
        meta: {
          activeMenu: '/icon/fa',
          title: 'Font Awesome'
        }
      }
    ]
  },
  {
    path: '/nav',
    name: 'Nav',
    component: '@/layout/index',
    redirect: { path: '/nav/index' },
    icon: 'xia xia-nav',
    meta: {
      title: '导航',
      roles: [1, 2]
    },
    children: [
      {
        path: 'index',
        component: '/nav/index',
        meta: {
          activeMenu: '/nav',
          title: ''
        }
      }
    ]
  },
  {
    path: '/tools',
    name: 'Tools',
    component: '@/layout/index',
    redirect: { path: '/tools/my' },
    icon: 'xia xia-tool',
    meta: {
      title: '工具',
      roles: [1, 2]
    },
    children: [
      {
        path: 'my',
        props: true,
        component: '/tools/my',
        meta: {
          title: '我的工具',
          activeMenu: '/tools'
        }
      }
    ]
  },
  {
    path: '/configs',
    name: 'Configs',
    component: '@/layout/index',
    redirect: { path: '/configs/menu' },
    icon: 'xia xia-setting',
    meta: {
      title: '配置',
      roles: [1, 2]
    },
    children: [
      {
        path: 'menu',
        props: true,
        component: '/configs/menu',
        meta: {
          title: '菜单管理',
          activeMenu: '/configs/menu'
        }
      },
      {
        path: 'user',
        props: true,
        component: '/configs/user',
        meta: {
          title: '用户管理',
          activeMenu: '/configs/user'
        }
      }
    ]
  },
  {
    path: '/profile',
    name: 'Profile',
    component: '@/layout/index',
    redirect: { path: '/profile/index' },
    icon: 'xia xia-profile ',
    meta: {
      title: '个人中心',
      roles: [1, 2]
    },
    children: [
      {
        path: 'index',
        props: true,
        component: '/profile/index',
        meta: {
          activeMenu: '/profile'
        }
      }
    ]
  }
]
