/*
 * 公共方法 工具函数
 *
*/
import storage from '@/utils/storage'

// 获取医院代号
export const getCode = function() {
  try {
    // const global_config = storage.local.get('global_config')
    // const hosp_config = global_config && global_config.hosp_config
    // const code = (hosp_config && hosp_config.global_hospital_code) || ''
    // return code
    // return 'demo_000'
    return 'demo_111'
    // return 'gyfy_117'
    // return 'fdzsy_113'
  } catch (error) {
    console.log(error)
  }
}

// 获取网站title
export const getSiteTitle = function() {
  try {
    const global_config = storage.local.get('global_config')
    const site_config = global_config && global_config.site_config
    const title = (site_config && site_config.global_site_title) || ''
    return title
  } catch (error) {
    console.log(error)
  }
}
// 切换路由设置title
export function getPageTitle(pageTitle) {
  const title = getSiteTitle() || '数据平台'
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
// 获取打开详情的方式
export const getOpenType = function() {
  try {
    const global_config = storage.local.get('global_config')
    const site_config = global_config && global_config.site_config
    const open = (site_config && site_config.patient_detail_open_at_dialog) || false
    return open
  } catch (error) {
    console.log(error)
  }
}
