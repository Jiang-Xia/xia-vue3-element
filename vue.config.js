const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  devServer: {
    open: true, // 启动项目后自动开启浏览器
    overlay: { // 是否开启协议名,如果开启会发出警告
      warnings: false,
      errors: true
    },
    disableHostCheck: true,
    port: 3330,
    /* 使用代理 */
    proxy: {
      '/proxy-api': { // 代理标识
        /* 目标代理服务器地址 */
        target: 'https://fundsuggest.eastmoney.com',
        /* 允许跨域 */
        changeOrigin: true,
        pathRewrite: {
          // 标识替换
          // 原请求地址为 /proxy-api/getData 将'/proxy-api'替换''时，
          // 代理后的请求地址为： http://xxx.xxx.xxx/getData
          // 若替换为'/other',
          // 则代理后的请求地址为 http://xxx.xxx.xxx/other/getData
          '^/proxy-api': ''
        }
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  }
}
