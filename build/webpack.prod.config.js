/**
 * 生产环境
 * 
 * by tommyshao
 */

var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var FaviconsWebpackPlugin = require('favicons-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')


var pkg = require('../package.json')
var webConf = pkg.webConfig
var baseConf = require('./webpack.base.config')
var banner = require('./banner')
var destPath = path.join(__dirname, '../assets')
var source_path = path.resolve('./src')

console.log(destPath)

module.exports = merge(baseConf, {
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
                'lib/es5-shim.min.js',
                'lib/es5-sham.min.js',
                'lib/html5shiv.min.js'
            ]
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.DefinePlugin({
            '__DEV__': false
        }),
        new CleanWebpackPlugin([destPath], {
            root: path.join(__dirname, '../'),
            verbose: true,
            dry: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            mangle: { // 排除不想要压缩的对象名称
                except: ['$super', '$', 'exports', 'require', 'module', '_']
            },
            compress: {
                warnings: false
            }
        }),
        new webpack.NoErrorsPlugin(),
        new FaviconsWebpackPlugin({
            logo: source_path+'/public/images/logo.png',
            icons: {
                android: false,
                appleIcon: false,
                appleStartup: false,
                favicons: true
            }
        }),
        new webpack.BannerPlugin(banner, { raw: true }),
        new webpack.optimize.CommonsChunkPlugin('common.js'),
        new CopyWebpackPlugin([
            { from : 'node_modules/es5-shim/es5-shim.min.js' , to: 'lib/es5-shim.min.js'},
            { from : 'node_modules/es5-shim/es5-sham.min.js' , to: 'lib/es5-sham.min.js'},
            { from : 'node_modules/html5shiv/dist/html5shiv.min.js' , to: 'lib/html5shiv.min.js'}
        ])
    ]
})