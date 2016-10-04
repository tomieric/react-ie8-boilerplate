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
'* Design by tommyshao <tomieric@gmail.com>',
'* under license '+ options.license,
'* '+ options.homepage,
'*/'
]

module.exports = banner.join('\n')