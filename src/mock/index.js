import Mock from 'mockjs'
import * as mockData from './mock'
// import {makeToken} from './mock'

/**
 * @Description: 格式化mock 返回数据
 * @param data {*}  请求数据结果
 * @param code {number} 请求状态值
 * @param msg {Sting} 请求状态消息
*/
function formattingData(data) {
  let obj = {
    data: data,
    code: data.code,
    msg: (data.code === '00000' ? '请求成功' : '请求失败')
  }
  obj = {...obj,...data}
  console.log('===========================')
  console.log(obj)
  console.log('===========================')
  return obj
}

Mock.mock('/api/v2/user_config/global_configs', (ops) => formattingData(mockData.globalConfigs(ops)))
Mock.mock('/api/v2/token/user/make_token', (ops) => formattingData(mockData.makeToken(ops)))
Mock.mock('/api/v2/token/user/destroy_token', (ops) => formattingData(mockData.destoryToken(ops)))
Mock.mock('/api/v2/token/user/token_profile', (ops) => formattingData(mockData.tokenProfile(ops)))
Mock.mock('/mock/news', (ops) => formattingData(mockData.produceNewsData(ops)))
