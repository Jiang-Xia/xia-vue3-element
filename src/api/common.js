/*
 * @Author: 江夏
 * @LastEditors: 江夏
 */
import config from '@/api/config'
import $axios from '@/utils/request.js'

// 获取项目、科室、病种权限信息
export async function globalConfigs() {
  return $axios({
    url: config.smaiuac_service_base_url + '/api/v2/user_config/global_configs',
    method: 'get'
  })
}

// 请求后台动态路由表
export async function getUserRoutes() {
  return $axios({
    url: config.smaiuac_service_base_url + '/api/v2/user/user_routes',
    method: 'get'
  })
}
