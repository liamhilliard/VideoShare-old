(function(){
	"use strict";

	// We use location.host over location.hostname as host includes the port number.
	// This is useful when testing on localhost.
	const webSocketConnection = new WebSocket('ws://'+ window.location.host +'/wsconn');

	webSocketConnection.addEventListener('open', function(event){
		console.log('ws: open', event);
		ws.send('Hello, server world!');
	});

	webSocketConnection.addEventListener('message', function(event){
		console.log('ws: message', event);
	});

})();
