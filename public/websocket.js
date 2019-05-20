(function(){
	"use strict";

	const ws = new WebSocket('ws://localhost:5001/videoshare-68389/us-central1/app');

	ws.addEventListener('open', function(event){
		console.log('ws: open', event);
		ws.send('Hello, server world!');
	});


	ws.addEventListener('message', function(event){
		console.log('ws: message', event);
	});

})();
