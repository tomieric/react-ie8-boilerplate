// 兼容 IE8
// require('es5-shim')
// require('es5-shim/es5-sham')
// require('core-js/es6/object')

require('es6-promise').polyfill();
require('console-polyfill');

if(!Object.assign){
	Object.assign = require('object-assign');
}