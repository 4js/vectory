const path = require("path")
const CommonConfig = require("./webpack.common.js")
const Merge = require("webpack-merge")

module.exports = Merge(CommonConfig, {
    entry: [
        path.join(__dirname, '../app/app.js'),
        path.join(__dirname, 'app.dev.js')
    ],

    output: {
        path: path.join(__dirname, '../dist/dev'),
        filename: '[name].[hash].js'
    },
})