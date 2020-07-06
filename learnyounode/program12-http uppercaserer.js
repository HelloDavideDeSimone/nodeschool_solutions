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

