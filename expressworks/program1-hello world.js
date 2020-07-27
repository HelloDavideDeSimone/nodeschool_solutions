const express = require('express')
const app = express()
const port = process.argv[2];

app.get('/home', function(req, res) {
  res.end('Hello World!')
})
app.listen(port)
