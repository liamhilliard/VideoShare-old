(function(){
	"use strict";

	const ws = new WebSocket('ws://'+ window.location.host +'/');

	ws.addEventListener('open', function(event){
		console.log('ws: open', event);
		ws.send('Hello, server world!');
	});

	ws.addEventListener('message', function(event){
		console.log('ws: message', event);
	});

})();
