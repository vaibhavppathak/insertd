var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.use(bodyParser.json());

app.post('/abc', function(req, res){
	var name = req.body.name;
	var email = req.body.email;
	var html = "Username" + name +".<br>"+"Email" + email +".<br>" ;
	res.send(html);
	console.log(name)
});

//listen to port
app.listen(8080, function() {
 console.log("Server started at port number: 8080");
});


