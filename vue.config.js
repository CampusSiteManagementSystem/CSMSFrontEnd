const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    publicPath: '/',
    productionSourceMap: false,
    configureWebpack: {
        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    uglifyOptions: {
                        warnings: false,
                        compress: {
                            drop_console: true,
                            pure_funcs: ['console.log']
                        }
                    }
                })
            ]
        },
        performance: {
            maxEntrypointSize: 10000000,
            maxAssetSize: 30000000,
        }
    },
}