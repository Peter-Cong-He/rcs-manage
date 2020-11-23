// vue.config.js
module.exports = {
  // 选项...配置方向代理
  devServer: {
    proxy: {
      '/ajax': {
        target: 'https://m.maoyan.com/',
        // ws: true,
        changeOrigin: true
      }
      //   '/foo': {
      //     target: '<other_url>'
      //   }
    }
  }
}
