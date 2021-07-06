/*
 * @Author: 江夏
 * @LastEditors: 酱
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/base.scss'
import '@/utils/rem.js'
import './permission'
import '@/mock'
import '@/icons'
import ElementPlus from 'element-plus'
import '@/styles/element-variables.scss'
import '@/assets/font/xia-icon/iconfont.css'

/* 组件 */
const app = createApp(App)
app.use(ElementPlus).use(store).use(router).mount('#app')

/* 自定义指令 */
import directives from '@/directives'
app.use(directives)
/*
  全局组件注册
*/
import SvgIcon from '@/components/SvgIcon'
// 自动注册图表组件
import { componentfn } from '@/components/charts'
componentfn(app)
import BreadCrumb from '@/components/breadcrumb'
app.component('SvgIcon', SvgIcon)
app.component('BreadCrumb', BreadCrumb)

/* 第三方库 */
import echarts from 'echarts'
/* echart 加载主题 https://echarts.apache.org/zh/theme-builder.html */
import echartsTheme from '@/utils/echartsTheme.json'
echarts.registerTheme('walden', echartsTheme)

// import localforage from 'localforage/dist/localforage.js'
// // 患者详情缓存数据库
// const xiaSystemDataDb = localforage.createInstance({
//   name: 'xiaSystemDataDb',
//   storeName: `xiaSystemDataDbStore`
// })
/*
  常用方法挂载
*/
import { getToken } from '@/utils/cookie'
import axios from '@/utils/request'
import { getCode, getOpenType } from '@/utils/common'
const globalProperties = app.config.globalProperties
globalProperties.$getCode = getCode
globalProperties.$getOpenType = getOpenType
globalProperties.devtools = false
globalProperties.$getToken = getToken
globalProperties.$axios = axios
globalProperties.log = console.log
globalProperties.$echarts = echarts
export default app
