import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/base.scss'
import '@/utils/rem.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './permission'
import '@/mock'
import '@/icons'
import ElementPlus from 'element-plus'
import '@/styles/element-variables.scss'
import '@/assets/font/dee-icon/iconfont.css'

/* 组件 */
const app = createApp(App)
app.use(ElementPlus).use(store).use(router).mount('#app')

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
export default app

