"use strict";
const express = require('express');
const coreController = require('./routes/core.controller');
const app = express();
const port = process.env.PORT || 5001;

const WebSocket = require('ws');
const WebSocketServer = new WebSocket.Server({ server: app, path: '/wsconn' });

WebSocketServer.on('connection', function(socket){
	console.log('### connection established');
	
	socket.on('close', (a) => { console.log('### close', a); });
	socket.on('error', (a) => { console.log('### error', a); });
	socket.on('open', (a) => { console.log('### open', a); });
	socket.on('ping', (a) => { console.log('### ping', a); });
	socket.on('pong', (a) => { console.log('### pong', a); });
	socket.on('unexpected-response', (a) => { console.log('### unexpected-response', a); });
	socket.on('upgrade', (a) => { console.log('### upgrade', a); });
	socket.on('message', (a) => { console.log('### message', a); });
	
	socket.send('Hello, WS world!');
});

app.use('/', coreController(app));

app.listen(port, () => {
	console.log('### App listening on port '+ port);
});
