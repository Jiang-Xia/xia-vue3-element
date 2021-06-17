/*
 * @Author: 江夏
 * @LastEditors: 江夏
 */
import { getInfo } from '@/utils/cookie'
const getters = {
  /* 用户 */
  userInfo: state => state.user.userInfo || getInfo(),
  roles: state => state.user.roles,
  permission_routes: state => state.permission.routes,
  menuRoutes: state => state.permission.addRoutes,
  globalConfigs: state => state.user.globalConfigs,

  /* 页面 store */
  stepData: state => state.demo.stepData
}
export default getters
