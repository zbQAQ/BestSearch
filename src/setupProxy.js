const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://3.141.23.218:5000',
      secure: false,
      changeOrigin: true,
      pathRewrite: {
        "^/api": ""
      }
    })
  )
}

