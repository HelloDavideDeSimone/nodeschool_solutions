const concat = require('concat-stream')

var concatStream = concat(gotText)
function gotText(textBuffer) {
process.stdout.write(textBuffer.toString().split("").reverse().join(""))
}

process.stdin
.pipe(concatStream)



