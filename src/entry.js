/**
 * 入口文件
 * 
 * by tommyshao
 */

// 导入字体
//import './public/fonts/frontui-icon/fonticon/style.css'
// 导入公共样式
import './public/less/common.less'

// 兼容 IE8
import 'es5-shim'
import 'es5-shim/es5-sham'
import 'console-polyfill'
import esPromise from 'es6-promise'
import 'core-js/es6/object'
esPromise.polyfill()


import React from 'react'
import { render } from 'react-dom'

// 路由配置
import routes from './routes'

// 渲染模板
render(
    routes,
    document.getElementById('app')
)