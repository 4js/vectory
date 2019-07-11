// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'primary-color': '#CF1322',
          'link-color': '#1DA57A',
        },
        javascriptEnabled: true
      }
    }
  },
  // configureWebpack: {
  //   plugins: [
  //     new MyAwesomeWebpackPlugin()
  //   ]
  // }
}