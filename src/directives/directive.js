/*
 * @Author: 酱
 * @LastEditors: 酱
 * @Date: 2021-07-05 10:17:39
 * @LastEditTime: 2021-07-06 11:48:07
 * @Description:
 * @FilePath: \xia-vue3-element\src\directives\directive.js
 */
import { ElMessage } from 'element-plus'
import LoadingImg from '@/assets/img/common/img-loading.gif'
export const watermark = {
  beforeMount(el, binding, vnode, oldVnode) {
  },
  mounted(el, binding, vnode, oldVnode) {
    // console.log(el, binding, vnode, oldVnode)
    el.innerText = '<p>自定义指令:我是水印</p>'
  },
  beforeUpdate(el, binding, vnode, oldVnode) {

  },
  updated(el, binding, vnode, oldVnode) {

  },
  beforeUnmount(el, binding, vnode, oldVnode) {

  },
  unmounted(el, binding, vnode, oldVnode) {

  }
}
/* 使用的方法MDN已弃用可能导致浏览器不兼容 */
export const copy = {
  beforeMount(el, binding, vnode, oldVnode) {
  },
  mounted(el, binding) {
    const { value } = binding
    el.$value = value
    el.handler = () => {
      if (!el.$value) {
        // 值为空的时候，给出提示。可根据项目UI仔细设计
        console.log('无复制内容')
        ElMessage.warning('无复制内容')
        return
      }
      // 动态创建 textarea 标签
      const textarea = document.createElement('textarea')
      // 将该 textarea 设为 readonly 防止 iOS 下自动唤起键盘，同时将 textarea 移出可视区域
      textarea.readOnly = 'readonly'
      textarea.style.position = 'absolute'
      textarea.style.left = '-9999px'
      // 将要 copy 的值赋给 textarea 标签的 value 属性
      textarea.value = el.$value
      // 将 textarea 插入到 body 中
      document.body.appendChild(textarea)
      // 选中值并复制
      textarea.select()
      const result = document.execCommand('Copy')
      if (result) {
        console.log(this)
        console.log('复制成功') // 可根据项目UI仔细设计
        ElMessage.success('复制成功')
      }
      document.body.removeChild(textarea)
    }
    // 绑定点击事件，就是所谓的一键 copy 啦
    el.addEventListener('click', el.handler)
  },
  beforeUpdate(el, binding, vnode, oldVnode) {},
  // 当传进来的值更新的时候触发
  updated(el, { value }) {
    el.$value = value
  },
  beforeUnmount(el, binding, vnode, oldVnode) {},
  // 指令与元素解绑的时候，移除事件绑定
  unmounted(el) {
    el.removeEventListener('click', el.handler)
  }
}

// 图片懒加载
export const lazyload = {
  beforeMount(el, binding, vnode, oldVnode) {
  },
  mounted(el, binding) {
    const src = el.src
    el.setAttribute('src', LoadingImg)
    const wHeight = window.innerHeight
    const { top } = el.getBoundingClientRect()
    // 判断在可视范围内
    if (top <= wHeight) {
      el.setAttribute('src', src)
      el.setAttribute('loaded', 1)
    } else {
      el.setAttribute('src', LoadingImg)
      el.setAttribute('data-src', src)
    }
    el.addEventListener('load', el.loadedHandler)

    el.handler = () => {
      const loaded = el.getAttribute('loaded')
      if (loaded !== '1') {
        // 已经实现加载是会loading，即onload事件完成之后src才会替换为data-src的内容
        const dataSRc = el.getAttribute('data-src')
        el.setAttribute('src', dataSRc)
      }
    }
    window.addEventListener('scroll', el.handler, true)
  },
  beforeUnmount(el, binding, vnode, oldVnode) {},
  // 指令与元素解绑的时候，移除事件绑定
  unmounted(el) {
    window.removeEventListener('scroll', el.handler)
  }
}
