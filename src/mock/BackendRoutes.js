/*
 * @Author: 江夏
 * @Date: 2021-06-11 16:55:21
 * @LastEditTime: 2021-06-17 13:59:09
 * @LastEditors: 江夏
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
          activeMenu: '/charts'
        }
      }
    ]
  },
  {
    path: '/form',
    name: 'Form',
    component: '@/layout/index',
    redirect: { path: '/form/index' },
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
    path: '/configs',
    name: 'Configs',
    component: '@/layout/index',
    redirect: { path: '/configs/menu' },
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
          activeMenu: '/configs'
        }
      },
      {
        path: 'user',
        props: true,
        component: '/configs/user',
        meta: {
          title: '用户管理',
          activeMenu: '/configs'
        }
      }
    ]
  },
  {
    path: '/profile',
    name: 'Profile',
    component: '@/layout/index',
    redirect: { path: '/profile/index' },
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
