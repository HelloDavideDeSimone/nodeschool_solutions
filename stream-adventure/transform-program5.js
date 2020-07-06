const through = require('through2')
const stream = through(write, end) // puoi omettere end qui e quindi eliminare la funzione successiva (done() viene esereguito automaticamente)


function write (buffer, encoding, next) {
  this.push(buffer.toString().toUpperCase())
  next()
}
function end (done) {
  done()
}

process.stdin.pipe(stream).pipe(process.stdout)