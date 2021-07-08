/*
 * @Author: 江夏
 * @Date: 2021-06-11 16:55:21
 * @LastEditTime: 2021-07-08 15:05:46
 * @LastEditors: 酱
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
    title: '首页',
    meta: {
      roles: [1, 2]
    },
    children: [
      {
        path: 'index',
        name: 'DashboardResultQuery',
        component: '/dashboard/index',
        title: '首页',
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
    icon: 'xia xia-demo',
    title: '测试',
    meta: {
      roles: [1, 2]
    },
    children: [
      {
        path: 'theme',
        component: '/demo/theme',
        title: '换肤',
        meta: {
          activeMenu: '/demo/theme'
        }
      },
      {
        path: 'index',
        component: '/demo/index',
        title: 'demo',
        meta: {
          activeMenu: '/demo/index'
        }
      },
      {
        path: 'step',
        component: '/demo/step/index',
        title: '步骤',
        meta: {
          activeMenu: '/demo/step'
        }
      }
    ]
  },
  {
    path: '/component',
    name: 'Component',
    component: '@/layout/index',
    redirect: { path: '/component/custom' },
    icon: 'xia xia-tag',
    title: '组件',
    meta: {
      roles: [1, 2]
    },
    children: [
      {
        path: 'custom',
        component: '/component/custom/index',
        title: '自定义组件',
        meta: {
          activeMenu: '/component/custom'
        }
      },
      {
        path: 'element',
        component: '/component/element/index',
        title: 'element组件',
        meta: {
          activeMenu: '/component/element'
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
    title: '图表',
    meta: {
      roles: [1, 2]
    },
    children: [
      {
        path: 'index',
        props: true,
        component: '/charts/index',
        title: '图表总览',
        meta: {
          activeMenu: '/charts/index'
        }
      },
      {
        path: 'graph',
        props: true,
        component: '/charts/graph',
        title: '图表库',
        meta: {
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
    title: '表单',
    meta: {
      roles: [1, 2]
    },
    children: [
      {
        path: 'index',
        component: '/form/drag-control',
        title: '表单生成器',
        meta: {
          activeMenu: '/form/index'
        }
      },
      {
        path: 'question',
        component: '/form/question-type',
        title: '题型生成器',
        meta: {
          activeMenu: '/form/question'
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
    title: '图标',
    meta: {
      roles: [1, 2]
    },
    children: [
      {
        path: 'index',
        component: '/icon/index',
        title: 'custom',
        meta: {
          activeMenu: '/icon/index'
        }
      },
      {
        path: 'svg',
        component: '/icon/svg',
        title: 'SVG',
        meta: {
          activeMenu: '/icon/svg'
        }
      },
      {
        path: 'fa',
        component: '/icon/fa',
        title: 'Font Awesome',
        meta: {
          activeMenu: '/icon/fa'
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
    title: '导航',
    meta: {
      roles: [1, 2]
    },
    children: [
      {
        path: 'index',
        component: '/nav/index',
        title: '我的导航',
        meta: {
          activeMenu: '/nav'
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
    title: '工具',
    meta: {
      roles: [1, 2]
    },
    children: [
      {
        path: 'my',
        props: true,
        component: '/tools/my',
        title: '我的工具',
        meta: {
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
    title: '配置',
    meta: {
      roles: [1, 2]
    },
    children: [
      {
        path: 'menu',
        props: true,
        component: '/configs/menu',
        title: '菜单管理',
        meta: {
          activeMenu: '/configs/menu'
        }
      },
      {
        path: 'user',
        props: true,
        hidden: true,
        component: '/configs/user',
        title: '用户管理',
        meta: {
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
    title: '个人中心',
    meta: {
      roles: [1, 2]
    },
    children: [
      {
        path: 'index',
        props: true,
        component: '/profile/index',
        title: '个人中心',
        meta: {
          activeMenu: '/profile'
        }
      }
    ]
  }
]
