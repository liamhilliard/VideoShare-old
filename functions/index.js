const functions = require('firebase-functions');
const conf = require('../conf.js');
const express = require('express');

const app = express();

app.get('/', (request, response) => {
    response.sendFile('index.html', { root: conf.ROOT });
});

exports.app = functions.https.onRequest(app);
