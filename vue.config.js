const webpack = require('webpack')
module.exports = {
    pwa: {
        name: '1T3',
        themeColor: '#262524 ',
        msTileColor: '#AAA199 ',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',
    },
    configureWebpack: {
        plugins: [
            new webpack.IgnorePlugin({
                resourceRegExp: /^\.\/locale$/,
                contextRegExp: /moment$/
            })
        ]
    }
}