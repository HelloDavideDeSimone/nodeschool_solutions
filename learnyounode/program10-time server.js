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

