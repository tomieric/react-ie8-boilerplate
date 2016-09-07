/**
 * 基础配置
 * 
 * by tommyshao
 */
'use strict';

var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')


var assertPath = path.join(__dirname, '../assets')
var source_path = path.resolve('./src')

//var precss = require('precss')
var autoprefixer = require('autoprefixer')
var px2rem = require('postcss-px2rem')

module.exports = {
    entry: {
        bundle: './src/entry.js'
    },
    output: {
        path: assertPath,
        filename: '[name]-[hash].js'
    },
    resolve: {
        // 别名定义
        alias: {
            constants: source_path+'/constants',
            helpers: source_path+'/helpers',
            components: source_path+'/components'
        },
        extensions: ['', '.js', '.jsx', '.css', '.less'],
        root: [path.resolve('./src'), path.resolve('./node_modules')]
    },
    module: {
        noParse: [
            // 不转换
        ],
        loaders: [
            // {
            //     test: /\.html$/,
            //     loader: 'file?name=[name].[ext]'
            // },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!less-loader')
            },
            {
                test: /\.(gif|jpg|png)\??.*$/,
                loader: 'url-loader?limit=10000&name=[name].[ext]'
            },
            {
                test: /\.(woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=10000&name=[name].[ext]'
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015', 'stage-2'],
                    cacheDirectory: true
                }
            }
        ],
        postLoaders: [
          {
            test: /\.js$/,
            loaders: ['es3ify-loader'],
          }
        ]
    },
    postcss: function() {
        return [autoprefixer]
    },
    plugins: [
        new ExtractTextPlugin('app.[hash].css')
    ]
}