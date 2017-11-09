var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    "entry": [
        path.join(__dirname, "../app/app")
    ],
    "output": {
        path: path.join(__dirname, "../dist"),
        filename: "bundle.js"
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
                    use: ['css-loader', 'sass-loader']
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
            // {
            //     test: /\.(png|jpg|gif|svg)$/,
            //     loaders: 'file-loader',
            //     options: {
            //         name: '[hash:8].[name].[ext]'
            //     }
            // }
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: 'url-loader?limit=8192 &name=images/[hash:8].[name].[ext]'
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

        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin('common.js'),
        new webpack.ProvidePlugin({
            jQuery: "jquery",
            $: "jquery"
        }),

        new ExtractTextPlugin({ filename: "app.css", allChunks: true }) //编译生成app.css
    ]
}