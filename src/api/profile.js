import config from '@/api/config'
import $axios from '@/utils/request.js'

// 获取项目、科室、病种权限信息
export async function editPassword(data) {
  return $axios({
    url: config.smaiuac_service_base_url + '/api/v2/profile/user/modify_password',
    method: 'post',
    data: data
  })
}

