const path = require("path")
const express = require('express')
const app = express()
app.use(express.static(process.argv[3]||path.join(__dirname, 'public'))); //__dirname tells you the absolute path of the directory containing the currently executing file
app.listen(process.argv[2])
