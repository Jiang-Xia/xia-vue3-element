import XiaDialog from '../packages/xia-dialog'
const components = [
  XiaDialog
]
const install = function(Vue, options = {}) {
  console.log(Vue, options)
  components.forEach((component) => {
    Vue.component(component.name, component)
  })
}
/* 页面引入时 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install,
  XiaDialog
}
