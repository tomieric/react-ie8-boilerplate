/**
 * 开发环境
 * 
 * by tommyshao
 */

var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var OpenBrowserPlugin = require('open-browser-webpack-plugin')

var baseConf = require('./webpack.base.config')
var host = require('./host')()
var port = '8080'


module.exports = merge(baseConf, {
    cache: true,
    devtool: 'eval-source-map',
    plugins: [
        new webpack.DefinePlugin({
            '__DEV__': true
        }),
        new webpack.HotModuleReplacementPlugin({
            multiStep: true
        }),
        new OpenBrowserPlugin({
            url: ['http://', host, ':', port,'/'].join('')
        })
    ],
    devServer: {
        histroyApiFallback: true,
        hot: true,
        stats: 'erros-only',
        host: host,
        port: port,
        // 代理到 mock 服务器
        proxy: {
            '/API/*': {
                target: 'http://192.168.8.160:20160/',
                rewrite: function(req) {
                    req.url = req.url.replace(/^\/API/, '')
                }
            }
        }
    }
})