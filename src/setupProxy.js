const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://us-central1-car-check-in.cloudfunctions.net/app',
<<<<<<< HEAD
            // target: 'http://localhost:5001/car-check-in/us-central1/app',
=======
            //target: 'http://localhost:5001/car-check-in/us-central1/app',
>>>>>>> a464bf3fecaa6cd91629ad6bb5f021fb6185b3a0
            changeOrigin: true,
        }),
    )
}
