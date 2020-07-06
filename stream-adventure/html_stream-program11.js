const trumpet = require('trumpet')
const tr = trumpet()
var through = require('through2');
const stream = through(write) 


function write(buf,encoding, next){
    this.push(buf.toString().toUpperCase());
    next();
}

const loud = tr.createStream('.loud')
loud.pipe(stream).pipe(loud)
process.stdin.pipe(tr).pipe(process.stdout)