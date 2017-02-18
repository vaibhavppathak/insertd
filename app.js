var express = require('express'); //require express module
var mongoose =require('mongoose');//require moongose module
var app = express(); //creatig insatnce of express function
var bodyParser = require('body-parser');
var db =require('./mongodb/db.js');
var routes = require('./routes/index.js'); //create route for index
var path = require('path');
var multer = require('multer');

app.use(bodyParser.json());
app.use(db());
app.use('/', routes);

// Listen to this Port
app.listen(8080, function() {
	console.log("Server started at port number: 8080");
});
