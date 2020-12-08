import layout from '@/layout/index.vue'
// activeMenu 用来高亮导航的参数
const Profile = {
  path: '/profile',
  name: 'Profile',
  component: layout,
  redirect: { path: '/profile/index' },
  meta: {
    title: '个人中心',
    roles: [1, 2]
  },
  children: [
    {
      path: 'index',
      props: true,
      component: () => import('@/views/profile/index.vue'),
      meta: {
        activeMenu: '/profile'
      }
    }
  ]
}
export default Profile
