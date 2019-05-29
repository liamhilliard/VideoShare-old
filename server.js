"use strict";
const express = require('express');
const coreController = require('./routes/core.controller');
const app = express();
const port = process.env.PORT || 5001;

app.use((request, response, next) => {
	console.dir(request.headers, {depth: null, colors: true});
	return next();
});

app.use('/', coreController(app));

app.listen(port, () => {
	console.log('### App listening on port '+ port);
});
