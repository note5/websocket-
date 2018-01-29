const express =require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();

//initialize a simple http server
const server = http.createServer(app);

//initialize the WebSocket server instance
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws, WebSocket) => {

    //connection is up, let's add a simple simple event
    ws.on('message', (message, string) => {

      let js = {"fields":{"cnt":4}, "port":2};
        //log the received message and send it back to the client
        console.log('received: %s', message);
        
        ws.send(JSON.stringify(js));
    });

    //send immediatly a feedback to the incoming connection    
    ws.send('Hi there, I am a WebSocket server');
});

//start our server
server.listen(process.env.PORT || 3002, () => {
    console.log(`Server started on port ${server.address().port}`);
});