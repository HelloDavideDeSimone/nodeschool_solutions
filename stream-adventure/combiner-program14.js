const split = require("split")
const through = require('through2').obj
const combine = require('stream-combiner')
const zlib = require("zlib"); 


module.exports = function () {
const input = through(write, end)
var gen, booksv=[]

  function write (line, _, next) {
    if(  !(line||0) ) return next();
    const json = JSON.parse(line)
    if(json.type=="genre" && gen)gen=json.name
    if(json.type=="book") booksv.push(json.name)
    next()
  }

  function end (next) {
    //{ undefined: counts }
    this.push(JSON.stringify({name: gen, books: booksv }) + '\n');
    gen=0;
    booksv=[]
    next()
  }

  return combine(split("\n"),input,zlib.createGzip())
}

