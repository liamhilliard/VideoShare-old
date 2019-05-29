"use strict";
const express = require('express');
const conf = require('../conf');
const coreRouter = express.Router();

module.exports = function(app){
    // Set up WebSockets
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

    app.on('upgrade', function(request, socket, head){
        console.log('### upgrade event');
        WebSocketServer.handleUpgrade(request, socket, head, (ws) => {
            console.log('### handleUpgrade done');
            WebSocketServer.emit('connection', ws, request);
        });
    });
    
    // Serve static files
    coreRouter.use(express.static(conf.ROOT));   
    return coreRouter; 
};
