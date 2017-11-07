/**
 * Develop config
 */

var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");



module.exports = {

    entry: [
        path.resolve(__dirname, '../app/app.js')
    ],

    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[hash].js',
        chunkFilename: '[name].[chunkhash].js'
    },

    module: {

        rules: [{
                test: /\.vue$/,
                loaders: 'vue-loader',
                options: {
                    loaders: {
                        scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
                        sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax', // <style lang="sass">
                        js: 'babel-loader?presets=es2015',
                    }
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'resolve-url-loader', 'sass-loader']
                })
            },
            {
                test: /\.js$/,
                loaders: 'babel-loader',
                query: { presets: ['es2015'] },
                exclude: /node_modules/
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loaders: 'file-loader'
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loaders: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }

        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['.vue', '.js', '.json']
    },

    plugins: [
        new htmlWebpackPlugin({
            inject: true,
            filename: 'index.html',
            template: path.resolve(__dirname, '../app/index.html')
        }),
        new webpack.optimize.CommonsChunkPlugin('common.js'),
        new webpack.ProvidePlugin({
            jQuery: "jquery",
            $: "jquery"
        }),
        new webpack.HotModuleReplacementPlugin(),


        new ExtractTextPlugin({ filename: "app.css", allChunks: true }) //编译生成bootstrap.css
    ]


};