const express = require('express')
const path = require("path")
const app = express()

app.get('/home', function(req, res) {
  res.render('index', {date: new Date().toDateString()})
})
app.set('views', process.argv[3] || path.join(__dirname, 'templates'))
app.set('view engine', 'pug')
app.listen(process.argv[2])
