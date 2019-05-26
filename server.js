"use strict";
const conf = require('./conf.js');
const express = require('express');
const https = require('https');

const app = express();
const port = process.env.PORT || 5001;

app.use((request, response, next) => {
	//console.log('--> new request');
	//console.log('request.socket', request.socket)
	//console.log('request.httpVersion', request.httpVersion);
	//console.log('request.headers', request.headers);
	//console.log('request.upgrade', request.upgrade);
	//console.log('request.url', request.url);
	//console.log('request.method', request.method);
	//console.log('request.statusCode', request.statusCode);

	return next();
});

// Force https
app.use((request, response, next) => {
	console.log('x-forwarded-proto', request.headers['x-forwarded-proto']);
	return next();
});

app.get('/', (request, response) => {
	response.sendFile('index.html', { root: conf.ROOT });
});

app.use(express.static(conf.ROOT));

app.listen(port, () => {
	console.log('### App listening on port '+ port);
});
