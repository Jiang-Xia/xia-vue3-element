/*
 * @Author: 酱
 * @LastEditors: 酱
 * @Date: 2021-07-02 17:21:38
 * @LastEditTime: 2021-07-05 11:06:38
 * @Description: 编写vue3插件
 * @FilePath: \xia-vue3-element\src\directives\index.js
 */
import * as directives from './directive'
export default {
  /**
   * @description: 插件install方法
   * @param {app:vue实例}
   */
  install: (app, options) => {
    // console.log(app, 1111)
    app.config.globalProperties.$console = console.log()
    // Plugin code goes here
    app.provide('customData', { aaa: 'aaaa' })

    // 自定注册自定义指令
    for (const key in directives) {
      if (key !== 'default') {
        app.directive(key, directives[key])
      }
    }
    app.mixin({
      created() {
        // some logic ...
      }
    })
  }
}
