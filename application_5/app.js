var express = require ('express'); // include express
var app = express ();

app.use (express.static (__dirname + '/public')); // where to look static files

app.listen ('3000');
console.log ('App listining to port 3000');