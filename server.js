"use strict";
const express = require('express');
const coreController = require('./routes/core.controller');
const app = express();
const port = process.env.PORT || 5001;

app.use('/', coreController);

app.listen(port, () => {
	console.log('### App listening on port '+ port);
});
