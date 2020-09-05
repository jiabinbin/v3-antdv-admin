module.exports = {
  // productionSourceMap: false,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/v3-antdv-admin/'
    : '/',
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  devServer: {
    open: true
  }
}
