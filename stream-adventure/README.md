# NodeSchool Stream Adventure Solutions



## 1 BEEP BOOP

```javascript
console.log('beep boop');
```

## 2 MEET PIPE

```javascript
var fs = require('fs');
var file = process.argv[2];
fs.createReadStream(file).pipe(process.stdout);
```

## 3 INPUT OUTPUT

```javascript
process.stdin.pipe(process.stdout);
```

## 4 READ IT

```javascript
const { Readable } = require('stream')

class ReadableStream extends Readable {
  constructor (content, options = {}) {
    super(options)
    this.content = content
  }

  _read (size) {
    if (!this.content) return this.push(null)

    this.push(this.content.slice(0, size))
    this.content = this.content.slice(size)
  }
}

const stream = new ReadableStream(process.argv[2])
stream.pipe(process.stdout)

```

## 5 TRANSFORM

```javascript
const through = require('through2')
const stream = through(write, end) 

function write (buffer, encoding, next) {
  this.push(buffer.toString().toUpperCase())
  next()
}
function end (done) {
  done()
}

process.stdin.pipe(stream).pipe(process.stdout)
```

## 6 LINES


```javascript
const split = require('split')
const through = require('through2')
const stream = through(write) 
var foo = 0;

function write (buffer, encoding, next) {
  if(foo == 1){ this.push(buffer.toString().toUpperCase()); foo=0  }
  else {this.push(buffer.toString().toLowerCase()); foo =1}
  
  next()
}

process.stdin
.pipe(split("\n"))
.pipe(stream).pipe(process.stdout)
```

## 7 CONCAT

```javascript
const concat = require('concat-stream')

var concatStream = concat(gotText)
function gotText(textBuffer) {
process.stdout.write(textBuffer.toString().split("").reverse().join(""))
}

process.stdin
.pipe(concatStream)
```

## 8 HTTP SERVER


```javascript
const http = require('http')
const through = require('through2');

const server = http.createServer(function (req, res) {
  if (req.method === 'POST') {
    function write (buf, _, next) {
        this.push(buf.toString().toUpperCase());
        next();
      }

  }
  else res.end('No POST received\n')
  req.pipe(through(write)).pipe(res);
});
server.listen(process.argv[2])
```

## 9 HTTP-CLIENT

```javascript
const { request } = require('http')
const options = { method: 'POST' }

const req = request('http://localhost:8099', options, (res) => {
     res.pipe(process.stdout)
   })
   process.stdin.pipe(req)
```

## 10 WEBSOCKETS


```javascript
const WebSocket = require('ws');
const { Readable } = require("stream")
const readable = Readable.from(["hello\n"])

const ws = new WebSocket('ws://localhost:8099')
const duplex = WebSocket.createWebSocketStream(ws);

readable.pipe(duplex); //You can also use duplex.write("hello\n")
duplex.pipe(process.stdout);

```

## 11 HTML STREAM

```javascript
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
```

## 12 DUPLEXER 

```javascript
const { spawn } = require('child_process')
var duplexer2 = require("duplexer2");

module.exports = function (cmd, args) {
    const childProc = spawn(cmd, args)
    return duplexer2(childProc.stdin, childProc.stdout)

}
```

## 13 DUPLEXER REDUX

```javascript
const duplexer = require('duplexer2')
const through = require('through2').obj

module.exports = function (counter) {
  const countries = {}
  const input = through(write, end)
  return duplexer({ objectMode: true }, input, counter)



  function write (row, _, next) {
    countries[row.country] = ( countries[row.country] || 0 ) + 1
    next()
  }

  function end (done) {
    //{ undefined: counts }
    counter.setCounts(countries)
    done()
  }

}
```

## 14 COMBINER

> you need install `crypto` package

```javascript
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
```

## 15 CRYPT


```javascript
const pass=process.argv[2]
const key = process.argv[3]

const crypto = require('crypto')
const decript = crypto.createDecipheriv('aes256', pass,key)

process.stdin.pipe(decript).pipe(process.stdout)
```

## 16 SECRETZ


```javascript
const zlib= require("zlib")
const crypto = require('crypto')
const tar = require('tar')
const concat = require('concat-stream')
const combine = require('stream-combiner');

const decript = crypto.createDecipheriv(process.argv[2], process.argv[3],process.argv[4])

const parser = new tar.Parse()
parser.on('entry', function (e) {


   if( e.type == "File" ) {
   let hash = crypto.createHash('md5', { encoding: 'hex' });
    e.pipe(hash).pipe(concat(function (h) {
       process.stdout.write(h + ' ' + e.path + "\n")
      }))
}
e.resume()

});

combine(process.stdin, decript, zlib.createGunzip(), parser)
```
