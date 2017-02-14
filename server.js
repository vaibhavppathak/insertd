var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.use(bodyParser.json());

app.get('/', function(req, res){
var html = "<form method='get' action='/'>" +
    "<input type='text' name='name' placeholder='Enter full name'>" +".<br>"+
    "<input type='text' name='email' placeholder='Enter your email'>" +".<br>"+
    "<input type='submit' value='Submit'>" +
"</form>";
res.send(html);
});

app.post('/', function(req, res){
	var name = req.body.name;
	var email = req.body.email;
	var html = "Username" + name +".<br>"+"Email" + email +".<br>" ;
	res.send(html);
});

//listen to port
app.listen(8080, function() {
 console.log("Server started at port number: 8080");
});


