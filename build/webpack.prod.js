const path = require("path")
const CommonConfig = require("./webpack.common.js")
const Merge = require("webpack-merge")

module.exports = Merge(CommonConfig, {
    entry: [
        path.resolve(__dirname, '../app/app.js'),
        path.resolve(__dirname, 'app.prod.js')
    ],

    output: {
        path: path.resolve(__dirname, '../dist/prod'),
        filename: '[name].[hash].js',
        chunkFilename: '[name].[chunkhash].js'
    },
})