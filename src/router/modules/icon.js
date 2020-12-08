import layout from '@/layout/index.vue'
// activeMenu 用来高亮导航的参数
const Icon = {
  path: '/icon',
  name: 'Icon',
  component: layout,
  redirect: { path: '/icon/index' },
  meta: {
    title: '图标',
    roles: [1, 2]
  },
  children: [
    {
      path: 'index',
      component: () => import('@/views/icon/index'),
      meta: {
        activeMenu: '/icon/index',
        title: 'custom'
      }
    },
    {
      path: 'svg',
      component: () => import('@/views/icon/svg'),
      meta: {
        activeMenu: '/icon/svg',
        title: 'SVG'
      }
    },
    {
      path: 'fa',
      component: () => import('@/views/icon/fa'),
      meta: {
        activeMenu: '/icon/fa',
        title: 'Font Awesome'
      }
    }
  ]
}
export default Icon
