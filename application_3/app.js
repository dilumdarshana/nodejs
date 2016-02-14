var express = require ('../node_modules/express');

var app = express ();

app.get (['/', '/about'], function (req, res) {

	switch (req.url) {

		case '/':

			res.send ('I am home page');
			break;

		case '/about':
		
			res.send ('I am about us page');
			break;
	}
	

}).listen (3434, function () {
	console.log ('Server listening');
});