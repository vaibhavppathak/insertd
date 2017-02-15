var mongoose = require('mongoose'); // require mongoose module
var conn = mongoose.connect('mongodb://127.0.0.1/vaibhavp'); // connection to mongodb
var express = require('express'); // require express module
var bodyParser = require('body-parser'); //require bodyParsar module
var router = express.Router();

// Create Schema
var userschema = mongoose.Schema({
    name: String,
    email: String,
    password:String,
}, {
    strict: true,
    collection: 'User_detail'
});

var users = conn.model('Users', userschema);  // create module
router.all('/users/create', function (req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;

    var record = new users({
      name: name,
      email: email,
      password:password,
    });
    record.save(function (err) {
      if(err){
         throw error;
        } else {
            console.log("record is inserted successfully");
        }
    });
      
});
module.exports = router;