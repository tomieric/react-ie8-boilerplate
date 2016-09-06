/**
 * 获取本机 IP 地址
 * 
 * by tommyshao
 */

var os = require('os')

module.exports = function() {
    var ifaces = os.networkInterfaces()
    var ip = '', result = []
    for(var dev in ifaces) {
        ifaces[dev].forEach(function(details) {
            if(ip === '' && details.family === 'IPv4' && !details.internal) {
                ip = details.address
                return;
            }
        })
    }

    return ip || '127.0.0.1'
}