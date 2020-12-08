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
      errors: false
    },
    host: '0.0.0.0',
    port: 3330
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
