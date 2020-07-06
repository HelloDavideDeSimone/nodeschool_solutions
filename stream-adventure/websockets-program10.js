const WebSocket = require('ws');
const { Readable } = require("stream")

const readable = Readable.from(["hello\n"])




const ws = new WebSocket('ws://localhost:8099')
const duplex = WebSocket.createWebSocketStream(ws);

readable.pipe(duplex); //sostituibile con duplex.write("hello\n")
duplex.pipe(process.stdout);
