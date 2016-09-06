/**
 * 版权申明 
 * by tommyshao
 */

var options = require('../package.json')

var date = new Date()

var banner = [
'/*',
'* '+ options.name,
'* by '+ options.author,
'* v'+ options.version,
'* created at '+ date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() ,
'* 2014-'+ (new Date().getFullYear()),
'* www.frontpay.cn All Rights Reserved.',
'* under license '+ options.license,
'* '+ options.homepage,
'*/'
]

module.exports = banner.join('\n')