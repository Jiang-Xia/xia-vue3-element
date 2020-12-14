import layout from '@/layout/index.vue'
// activeMenu 用来高亮导航的参数
const Form = {
  path: '/form',
  name: 'Form',
  component: layout,
  redirect: { path: '/form/index' },
  meta: {
    title: '表单',
    roles: [1, 2]
  },
  children: [
    {
      path: 'index',
      component: () => import('@/views/form/index'),
      meta: {
        activeMenu: '/form',
        title: '表单生成器'
      }
    }
  ]
}
export default Form
