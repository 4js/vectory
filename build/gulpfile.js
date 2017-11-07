/**
 * vectory gulpfile
 *
 * @author 4js
 *
 * @link https://github.com/4js/vectory.git
 */

var gulp = require('gulp');
var gutil = require("gulp-util");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var ip = require('ip');
var net = require('net');
var open = require("open");
var qrcode = require('qrcode-terminal');
var colors = require('colors');
var portStart = 8088;
var localhost = ip.address();

function autoGetPort(port, callback) {

    var server = net.createServer().listen(port);

    server.on('listening', function() {

        server.close();

        if (typeof callback === 'function') {

            callback(port);
        }

    });

    server.on('error', function(err) {

        if (err.code === 'EADDRINUSE') {
            port++;
            autoGetPort(port, callback);
        }
    });
}


gulp.task('default', function(callback) {

    autoGetPort(portStart, function(port) {

        var host = "http://" + localhost + ":" + port;

        var webpackConfig = require('../build/webpack.config');

        webpackConfig.entry.unshift("webpack-dev-server/client?" + host, "webpack/hot/dev-server");

        var compiler = webpack(webpackConfig);

        new WebpackDevServer(compiler, {
            hot: true,
            stats: {
                colors: true,
                chunks: false
            }
        }).listen(port, localhost, function(err) {

            var start_page = host + '#/welcome';

            if (err) throw new gutil.PluginError("webpack-dev-server", err);
            gutil.log(colors.green("Access URL: ", "http://" + localhost + ":" + port + ""));
            qrcode.generate(start_page, { small: true });

            open(start_page);

        });

        callback();

    });


});