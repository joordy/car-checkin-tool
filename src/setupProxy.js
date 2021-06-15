const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            // target: 'https://us-central1-car-check-in.cloudfunctions.net/app',
            target: 'http://localhost:5001/car-check-in/us-central1/app',
            changeOrigin: true,
        }),
    )
}
