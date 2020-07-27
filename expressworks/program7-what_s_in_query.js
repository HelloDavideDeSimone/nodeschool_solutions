const express = require('express')
const app = express()

app.get('/search', (req, res)=> {
  //console.log(req.query.page)  //  to extract query string parameter "page" 
  res.send(req.query)
})
app.listen(process.argv[2])
