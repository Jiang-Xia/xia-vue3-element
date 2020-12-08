import Mock from 'mockjs'
// 当前用户信息
const userInfo = {
  last_login_time: '',
  status: 1,
  truename: '',
  uid: 13,
  user_type: 1,
  username: ''
}

// 全局配置
export const globalConfigs = function() {
  const data = {
    approval_config: { 'data_export_approval_is_enable': true },
    hosp_config: { 'global_hospital_code': 'demo_000',
      'global_hospital_name': '演示医院',
      'global_hospital_org_code': 'demo_000'
    },
    nav_config: {
      'nav_charts_is_enable': true,
      'nav_statistics_is_enable': true
    },
    site_config: {
      'global_site_name': '夏',
      'global_site_title': '夏',
      'patient_detail_open_at_dialog': true
    }
  }
  return data
}
// 获取token
export const makeToken = function(data) {
  const body = JSON.parse(data.body)
  userInfo.truename = body.username
  userInfo.username = body.username
  const res = {
    access_token: '123',
    expires_in: 42899,
    token_type: 'Bearer'
  }
  return res
}
// 退出
export const destoryToken = function() {
  return true
}
// 用户信息
export const tokenProfile = function() {
  const data = userInfo
  return data
}
export // 获取 mock.Random 对象
const Random = Mock.Random
// mock新闻数据，包括新闻标题title、内容content、创建时间createdTime
export const produceNewsData = function() {
  const newsList = []
  for (let i = 0; i < 20; i++) {
    const newNewsObject = {
      title: Random.ctitle(), //  Random.ctitle( min, max ) 随机产生一个中文标题，长度默认在3-7之间
      content: Random.cparagraph(), // Random.cparagraph(min, max) 随机生成一个中文段落，段落里的句子个数默认3-7个
      createdTime: Random.date() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；
    }
    newsList.push(newNewsObject)
  }
  return newsList
}
