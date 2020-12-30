const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = app => {
    app.use(
        '/service/API',
        createProxyMiddleware({
            target: 'http://dev-pc-hb.fastbet108.com',
            changeOrigin: true,
            logLevel: 'debug'
        })
    )
};