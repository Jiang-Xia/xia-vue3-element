/*
 * @Author: 酱
 * @LastEditors: 酱
 * @Date: 2021-07-02 17:21:38
 * @LastEditTime: 2021-07-02 18:04:22
 * @Description: 编写vue3插件
 * @FilePath: \xia-vue3-element\src\directives\index.js
 */
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

    app.directive('watermark', {
      beforeMount(el, binding, vnode, oldVnode) {
      },
      mounted(el, binding, vnode, oldVnode) {
        // console.log(el, binding, vnode, oldVnode)
        el.innerText = '<p>自定义指令</p>'
      },
      beforeUpdate(el, binding, vnode, oldVnode) {

      },
      updated(el, binding, vnode, oldVnode) {

      },
      beforeUnmount(el, binding, vnode, oldVnode) {

      },
      unmounted(el, binding, vnode, oldVnode) {

      }
    })

    app.mixin({
      created() {
        // some logic ...
      }
    })
  }
}
