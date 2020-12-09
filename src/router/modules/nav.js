import layout from '@/layout/index.vue'
// activeMenu 用来高亮导航的参数
const Nav = {
  path: '/nav',
  name: 'Nav',
  component: layout,
  redirect: { path: '/nav/index' },
  meta: {
    title: '导航',
    roles: [1, 2]
  },
  children: [
    {
      path: 'index',
      component: () => import('@/views/nav/index'),
      meta: {
        activeMenu: '/nav',
        title: ''
      }
    }
  ]
}
export default Nav
