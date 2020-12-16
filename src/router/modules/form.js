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
      component: () => import('@/views/form/drag-control'),
      meta: {
        activeMenu: '/form/index',
        title: '表单生成器'
      }
    },
    {
      path: 'question',
      component: () => import('@/views/form/question-type'),
      meta: {
        activeMenu: '/form/question',
        title: '题型生成器'
      }
    }
  ]
}
export default Form
