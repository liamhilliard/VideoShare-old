"use strict";
const express = require('express');
const conf = require('../conf');
const coreRouter = express.Router();
const webSocketConnection = require('./webSocketConnection.js');

// Wire up app modules
coreRouter.use('/wsconn', webSocketConnection);

// Serve static files
coreRouter.use(express.static(conf.ROOT));

module.exports = coreRouter;