# NodeSchool learnyounode Solutions

## 1 HELLO WORLD

```javascript
console.log('HELLO WORLD')
```

## 2 BABY STEPS

```javascript
let i, out=0;
for (i = 2; i < process.argv.length; i++) {
  out = out + Number(process.argv[i]);
}

console.log(out);
```

## 3 MY FIRST I/O

```javascript
const fs = require('fs')
const file = fs.readFileSync(process.argv[2]).toString();

console.log(file.split("\n").length-1);
```

## 4 MY FIRST ASINC I/O

```javascript
var fs = require('fs')
fs.readFile(process.argv[2], (err, data) => {

    if (err) throw err;
    console.log(data.toString().split("\n").length-1)

})
```

## 5 FILTERED LS

```javascript
var fs = require('fs')
var path = require('path');

fs.readdir(process.argv[2], (err, list) => {
    if (err) throw err;

    for (let i = 0; i < list.length; i++) {
        if (path.extname(list[i]) == `.${process.argv[3]}`) console.log(list[i]);

    }
} )
```

## 6 MAKE IT MODULAR


```javascript
const filterfn = require('./program6-mymodule.js')


var callback = function (err, list) {
    if (err) throw err;
    list.forEach(function (file) {
        console.log(file);
    })
}

filterfn(process.argv[2],process.argv[3], callback); 
```

## 6 MYMODULE.JS

```javascript
const fs = require('fs')
const path = require('path');



module.exports = function (dir, extension, callback) {
    fs.readdir(dir, function (err, data) {
      if (err) return callback(err); // ritorno anticipato

      else {
        data = data.filter(
            function (dir) {
            if(path.extname(dir) === '.' + extension) return true;
            }
            ) 
      }
    callback(null, data)
    })
}
```

## 7 HTTP CLIENT


```javascript
const var_url = process.argv[2];
const http =require('http');

http.get(var_url, (response) => {
    response.setEncoding("utf-8")
    response.on('data', console.log);
    response.on("error", console.error);

}).on("error", console.error)
```

## 8 HTTP COLLECT

```javascript
const var_url = process.argv[2].toString();
const http =require('http');
const bl = require('bl')
//const bl = new BufferList()

http.get(var_url, (response) => {
    response.pipe(bl( (err, data)=>{ 
        if (err) throw error;   
        data=data.toString() ;
        console.log(data.length ) ;
        console.log(data) ;
     }))

})
```

## 9 JUGGLING ASYNC


```javascript
const http =require('http');
const bl = require('bl')
var after = require("after")
var next = after(3, printResults);
let array = [];
let count=0;


function printResults(){
    for (var i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  }

function get(index){
http.get(process.argv[2+index], (response) => {
    response.pipe(bl( (err, data)=>{ 
        if (err) throw error;   
        array[index]=data.toString();
        next();
     }))

})

}


for (var i = 0; i < 3; i++)
  get(i);
```

## 10 TIME SERVER

```javascript
const port = process.argv[2]
const net = require('net')


function time_now(){
  let date= new Date()
  return( date.getFullYear().toString() + "-" +
   (date.getMonth()+1).toString().padStart(2, '0') + "-" +
    date.getDate().toString().padStart(2, '0') + " " + 
    date.getHours().toString().padStart(2, '0') + ":" + 
    date.getMinutes().toString().padStart(2, '0') + "\r\n")
}

const server = net.createServer(function (socket) {

  socket.write(time_now())
  socket.end()
     })
     server.listen(port)
```

## 11 HTTP FILE SERVER 

```javascript
const port = process.argv[2]
const path = process.argv[3]
const http = require('http')
const fs = require('fs')

const server = http.createServer((request, res)=>{ 
  res.writeHead(200, { 
    'content-type': 'text/plain' 
  })
  fs.createReadStream(path).pipe(res)

})
     server.listen(port)
```

## 12 HTTP UPPERCASERER

```javascript
const port = process.argv[2]
const http = require('http')
const bl = require('bl')
const { error } = require('console')

const server = http.createServer((request, res)=>{ 
  if (request.method !== 'POST') {
    return res.end('send me a POST\n')
  }
  request.pipe(bl((err, data)=>{
    if (err) throw error;
    res.writeHead(200, { 
      'content-type': 'text/plain' 
    })
    res.end( data.toString().toUpperCase());
    
    }))
})
     server.listen(port)
```

## 13 JSON API SERVER

```javascript
const port = process.argv[2]
const http = require('http')
var url = require('url');



const server = http.createServer( (req, res)=>{
  const elaborato = url.parse(req.url, true);
  let date = new Date(elaborato.query.iso);
  let message;

  if(elaborato.pathname=='/api/parsetime')
  
   message = { hour : date.getHours(), minute : date.getMinutes(), second: date.getSeconds() };
  else if(elaborato.pathname=='/api/unixtime')
   message = { unixtime : date.getTime() };

  if(message){
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end( JSON.stringify(message));
  }
  else res.end();
})


server.listen(Number(port))
```