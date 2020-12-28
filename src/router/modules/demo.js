import layout from '@/layout/index.vue'
// activeMenu 用来高亮导航的参数
const Demo = {
  path: '/demo',
  name: 'Demo',
  component: layout,
  redirect: { path: '/demo/index' },
  meta: {
    title: '测试',
    roles: [1, 2]
  },
  children: [
    {
      path: 'index',
      component: () => import('@/views/demo/index'),
      meta: {
        activeMenu: '/demo/index',
        title: 'demo'
      }
    },
    {
      path: 'step',
      component: () => import('@/views/demo/step/index'),
      meta: {
        activeMenu: '/demo/step',
        title: '步骤'
      }
    }
  ]
}
export default Demo
