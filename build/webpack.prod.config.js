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

var baseConf = require('./webpack.base.config')
var banner = require('./banner')
var assertPath = path.resolve(__dirname, '../assets')
var source_path = path.resolve('./src')

module.exports = merge(baseConf, {
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.DefinePlugin({
            '__DEV__': false
        }),
        new CleanWebpackPlugin([assertPath], {
            root: '',
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
        new webpack.optimize.CommonsChunkPlugin('common.js')
    ]
})