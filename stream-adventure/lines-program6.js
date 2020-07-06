const split = require('split')
const through = require('through2')
const stream = through(write) // puoi omettere end qui e quindi eliminare la funzione successiva (done() viene esereguito automaticamente)
var foo = 0;

function write (buffer, encoding, next) {
  if(foo == 1){ this.push(buffer.toString().toUpperCase()); foo=0  }
  else {this.push(buffer.toString().toLowerCase()); foo =1}
  
  next()
}


process.stdin
.pipe(split("\n"))
.pipe(stream).pipe(process.stdout)