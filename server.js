"use strict";
const port = process.env.PORT || 5001;
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const server = require('http').createServer(app);

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

const socketController = require('./routes/socket.controller')(server);
app.use('/', socketController);

server.listen(port, () => {
	console.log('### VideoShare listening on port '+ port);
});