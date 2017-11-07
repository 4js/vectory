/**
 * Production Config
 */

var path = require('path');

var webpack = require('webpack');

var config = require('./webpack.config');

config.plugins.push(new webpack.optimize.UglifyJsPlugin({

    cacheFolder: path.resolve(__dirname, '../cache'),

    compress: {
        warnings: false
    }

}));

module.exports = config;