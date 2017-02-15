var mongoose = require('mongoose'); // require mongoose module
var conn = mongoose.connect('mongodb://127.0.0.1/vaibhavp'); // connection to mongodb
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

// Create Schema
var userschema = mongoose.Schema({
    name: String,
    email: String,
    password:String,
}, {
    strict: true,
    collection: 'User_detail'
});

var users = conn.model('Users', userschema);
router.all('/users/create', function (req, res) {
//console.log('1222222222222')
var name = req.body.name;
var email = req.body.email;
var password = req.body.password;
    // console.log(email);

    if (name.length > 0 && password.length > 0 && email.length > 0) { 
        var record = new users({
            name: name,
            email: email,
            password:password,
        });
        record.save(function (err) {
         if(err){
            throw error;
        } else {
            console.log("record insert success");
        }
    });
    }    
});