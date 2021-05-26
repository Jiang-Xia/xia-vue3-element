/**
 * @description 渲染后端返回路由
 * @param asyncRoutes
 * @returns {*}
 * 声明的时候 require函数已经执行了(所以还是加载了文件)
 */
export function convertRouter(asyncRoutes) {
  return asyncRoutes.map((route) => {
    if (route.component) {
      console.log(route.component)
      if (route.component === '@/layout/index') {
        route.component = (resolve) => require(['@/layout'], resolve)
      } else {
        // const index = route.component.indexOf('views')
        // const path =
        //   index > 0 ? route.component.slice(index) : `views/${route.component}`
        // route.component = (resolve) => require([`@/${path}`], resolve)
      }
    }
    if (route.children && route.children.length) { route.children = convertRouter(route.children) }
    if (route.children && route.children.length === 0) delete route.children
    return route
  })
}
