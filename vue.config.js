const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  css: {
    loaderOptions: {
      // @/ 是 src/ 的别名
      // 所以这里假设你有 `@/styles/scss/_variables.scss` 这个文件
      // 注意：在 sass-loader v7 中，这个选项名是 "data"
      scss: {
        // 此文件有css的全局方法和全局变量
        prependData: `@import "~@/styles/scss/_mixins";`
      }
    }
  },
  devServer: {
    open: true, // 启动项目后自动开启浏览器
    overlay: { // 是否开启协议名,如果开启会发出警告
      warnings: false,
      errors: true
    },
    disableHostCheck: true,
    port: 3333,
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
  },
  outputDir: process.env.outputDir,
  publicPath: process.env.NODE_ENV === 'production' ? './' : './',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'production',
  productionSourceMap: false
}
