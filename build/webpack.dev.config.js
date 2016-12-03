/**
 * 开发环境
 *
 * by tommyshao
 */

var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var OpenBrowserPlugin = require('open-browser-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var pkg = require('../package.json')
var webConf = pkg.webConfig
var baseConf = require('./webpack.base.config')
var source_path = path.resolve('./src')
var host = require('./host')()
var port = '8089'


module.exports = merge(baseConf, {
    cache: true,
    devtool: 'eval-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: webConf.title,
            keywords: webConf.keywords,
            description: webConf.description,
            tongji: webConf.tongji,
            template: source_path+'/index.html',
            filename: 'index.html',
            inject: 'body',
            shims: [
                'node_modules/es5-shim/es5-shim.min.js',
                'node_modules/es5-shim/es5-sham.min.js',
                'node_modules/html5shiv/dist/html5shiv.min.js'
            ]
        }),
        new webpack.DefinePlugin({
            '__DEV__': true
        }),
        // new webpack.HotModuleReplacementPlugin({
        //     multiStep: true
        // }),
        new OpenBrowserPlugin({
            url: ['http://', host, ':', port,'/'].join('')
        })
    ],
    devServer: {
        historyApiFallback: true,
        hot: true,
        stats: 'erros-only',
        host: host,
        port: port,
        // 代理到 mock 服务器
        proxy: {
            '/API/*': {
                target: 'http://rap.taobao.org/projectId/47',
                rewrite: function(req) {
                    req.url = req.url.replace(/^\/API/, '')
                }
            }
        }
    }
})
