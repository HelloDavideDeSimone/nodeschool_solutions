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