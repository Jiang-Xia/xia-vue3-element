import layout from '@/layout/index.vue'
// activeMenu 用来高亮导航的参数
const Charts = {
  path: '/charts',
  name: 'Charts',
  component: layout,
  redirect: { path: '/charts/index' },
  meta: {
    title: '图表',
    roles: [1, 2]
  },
  children: [
    {
      path: 'index',
      props: true,
      component: () => import('@/views/charts/index.vue'),
      meta: {
        activeMenu: '/charts'
      }
    }
  ]
}
export default Charts
