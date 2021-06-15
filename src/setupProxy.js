const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/users', {
            target: 'https://jsonplaceholder.typicode.com',
            secure: false,
            changeOrigin: true,
        }),
    )
    app.use(
        createProxyMiddleware('/api/reservations', {
            target: 'https://us-central1-car-check-in.cloudfunctions.net/app',
            secure: false,
            changeOrigin: true,
        }),
    )

    // app.use(
    //     proxy('/api/breeds', {
    //         target: 'https://dog.ceo',
    //         secure: false,
    //         changeOrigin: true,
    //     }),
    // )
}

// module.exports = function (app) {
//     // app.use(
//     //     createProxyMiddleware('/api', {
//     //         target: 'https://us-central1-car-check-in.cloudfunctions.net/app',
//     //     }),
//     // )

//     app.use(
//         '/api',
//         createProxyMiddleware({
//             target: 'https://us-central1-car-check-in.cloudfunctions.net/app',
//             changeOrigin: true,
//         }),
//     )
//     // app.use(
//     //     '/api/reservations',
//     //     createProxyMiddleware({
//     //         target: 'https://us-central1-car-check-in.cloudfunctions.net/app',
//     //         changeOrigin: true,
//     //     }),
//     // )
//     // app.use(
//     //     '/api/order-details',
//     //     createProxyMiddleware({
//     //         target: 'https://us-central1-car-check-in.cloudfunctions.net/app',
//     //         changeOrigin: true,
//     //     }),
//     // )
//     // app.use(
//     //     '/api/carIndexKey',
//     //     createProxyMiddleware({
//     //         target: 'https://us-central1-car-check-in.cloudfunctions.net/app',
//     //         changeOrigin: true,
//     //     }),
//     // )
//     // app.use(
//     //     '/api/testEnv',
//     //     createProxyMiddleware({
//     //         target: 'https://us-central1-car-check-in.cloudfunctions.net/app',
//     //         changeOrigin: true,
//     //     }),
//     // )
//     // app.use(
//     //     '/api/payMethod',
//     //     createProxyMiddleware({
//     //         target: 'https://us-central1-car-check-in.cloudfunctions.net/app',
//     //         changeOrigin: true,
//     //     }),
//     // )
//     // app.use(
//     //     '/api/create-verification-session',
//     //     createProxyMiddleware({
//     //         target: 'https://us-central1-car-check-in.cloudfunctions.net/app',
//     //         changeOrigin: true,
//     //     }),
//     // )
//     // app.use(
//     //     '/api/create-checkin',
//     //     createProxyMiddleware({
//     //         target: 'https://us-central1-car-check-in.cloudfunctions.net/app',
//     //         changeOrigin: true,
//     //     }),
//     // )
//     // app.use(
//     //     '/api/create-payment-intent',
//     //     createProxyMiddleware({
//     //         target: 'https://us-central1-car-check-in.cloudfunctions.net/app',
//     //         changeOrigin: true,
//     //     }),
//     // )
// }
