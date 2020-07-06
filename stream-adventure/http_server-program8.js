
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





