const functions = require('firebase-functions');
const conf = require('../conf.js');

exports.helloWorld = functions.https.onRequest((request, response) => {
    response.sendFile('index.html', { root: conf.ROOT });
});
