const { spawn } = require('child_process')
var duplexer2 = require("duplexer2");

module.exports = function (cmd, args) {
    const childProc = spawn(cmd, args)
    return duplexer2(childProc.stdin, childProc.stdout)

}