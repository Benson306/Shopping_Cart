const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/products',
    createProxyMiddleware({
      target: 'https://ecomm-api-test.onrender.com',
      changeOrigin: true,
    })
 );};