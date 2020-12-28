import { getInfo } from '@/utils/cookie'
const getters = {
  /* 用户 */
  userInfo: state => state.user.userInfo || getInfo(),
  roles: state => state.user.roles,
  permission_routes: state => state.permission.routes,
  globalConfigs: state => state.user.globalConfigs,

  /* 页面 store */
  stepData: state => state.demo.stepData
}
export default getters
