(function(){
	"use strict";

	const ws = new WebSocket('ws://localhost:5000');

	ws.addEventListener('open', function(event){
		console.log('ws: open', event);
		ws.send('Hello, server world!');
	});


	ws.addEventListener('message', function(event){
		console.log('ws: message', event);
	});

})();
