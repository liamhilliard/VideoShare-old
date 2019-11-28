"use strict";
module.exports = function SocketController(httpServer){
    const express = require('express');
    const router = express.Router();
    const socketio = require('socket.io')(httpServer);

    socketio.on('connection', function(socket){
        console.log('user connected!');

        socket.on('disconnect', function(){
            console.log('user disconnected :(');
        });
    });

    return router;
};
