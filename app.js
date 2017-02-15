var express = require('express'); // require express module
var bodyParser = require('body-parser');
var mongoose =require('mongoose');// require moongose module
var routes = require('./routes/index'); // create route
var app = express();


app.use(bodyParser.urlencoded({ extended: true })); 
app.use('/', routes);


app.listen(8080, function() {
	console.log("Server started at port number: 8080");
});