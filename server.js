"use strict";
const express = require('express');
const app = express();
const port = process.env.PORT || 5001;
const coreController = require('./routes/core.controller')(app);

app.use('/', coreController.router);

const server = app.listen(port, () => {
	console.log('### App listening on port '+ port);
	coreController.setupUpgradeHandler(server);
});