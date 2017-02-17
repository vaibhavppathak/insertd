var express = require('express'); //require express module
var bodyParser = require('body-parser'); //required bodyParsar module
var mongoose =require('mongoose');//require moongose module
var app = express(); //creatig insatnce of express function
var db =require('./mongodb/db.js');
var routes = require('./routes/index.js'); //create route for index

app.use(bodyParser.urlencoded({ extended: true })); //urlencoded within bodyParsar , extract data from <form> element
app.use(db());
app.use('/', routes);

<<<<<<< HEAD
// Listen to this Port
=======

>>>>>>> b8c7d063e6946242956b7c1fdd0b33038d7916f1
app.listen(8080, function() {
	console.log("Server started at port number: 8080");
});