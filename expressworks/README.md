# NodeSchool Expressworks Solutions
Before verifying exercises, run: 
```shell
 $ taskkill /IM node.exe /F          ## Windows
 $ killall node                      ## Linux/Mac Os X
 ``` 
to end any previous processes/tasks.


## 1 HELLO WORLD!

```javascript
const express = require('express')
const app = express()
const port = process.argv[2];

app.get('/home', function(req, res) {
  res.end('Hello World!')
})
app.listen(port)
```

## 2 STATIC 

```javascript
const path = require("path")
const express = require('express')
const app = express()
app.use(express.static(process.argv[3]||path.join(__dirname, 'public'))); 
//__dirname tells you the absolute path of the directory containing the currently executing file
app.listen(process.argv[2])
```

## 3 PUG

```javascript
const express = require('express')
const path = require("path")
const app = express()

app.get('/home', function(req, res) {
  res.render('index', {date: new Date().toDateString()})
})
app.set('views', process.argv[3] || path.join(__dirname, 'templates'))
app.set('view engine', 'pug')
app.listen(process.argv[2])
```

## 4 GOOD OLD FORM

```javascript
const express = require('express')
const bodyparser = require('body-parser')
const app = express()

app.use(bodyparser.urlencoded({extended: false}))
app.post('/form', function(req, res) {
  res.end(req.body.str.split('').reverse().join(''))
})
app.listen(process.argv[2])
```

## 5 STYLISH CSS

```javascript
const express = require('express')
const app = express()
app.use(require('stylus').middleware(process.argv[3]))
app.use(express.static(process.argv[3])); 

app.listen(process.argv[2])
```

## 6 PARAM PAM PAM


```javascript
const express = require('express');
const app = express();

app.put('/message/:id', function(req, res){ 
 res.end( require('crypto')
    .createHash('sha1')
    .update(new Date().toDateString() + req.params.id)
    .digest('hex')
    )
  });

app.listen(process.argv[2])
```

## 7 WHAT'S IN QUERY

```javascript
const express = require('express')
const app = express()

app.get('/search', (req, res)=> {
  //console.log(req.query.page)  //  to extract query string parameter "page" 
  res.send(req.query)
})
app.listen(process.argv[2])
```

## 8 JSON ME


```javascript
const express = require('express');
const app = express();
const fs = require("fs");

app.get('/books', (req, res)=>{
  fs.readFile(process.argv[3], (err,data)=>{
    if (err) return res.sendStatus(500);
    return res.json(JSON.parse(data));
  })
})
app.listen(process.argv[2]);
```
