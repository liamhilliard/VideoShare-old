"use strict";
const express = require('express');
const conf = require('../conf');
const coreRouter = express.Router();

module.exports = function(app){
    // // Set up WebSockets
    // const WebSocket = require('ws');
    // const WebSocketServer = new WebSocket.Server({ server: app, path: '/wsconn' });

    // WebSocketServer.on('connection', function(socket){
    //     console.log('connection established');

    //     socket.on('message', function(message){
    //         console.log('message', message);
    //     });

    //     socket.send('Hello, WS world!');
    // });

    // Serve static files
    coreRouter.use(express.static(conf.ROOT));   
    return coreRouter; 
};
