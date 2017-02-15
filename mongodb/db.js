// the middleware function
module.exports = function () {
 var mongoose = require('mongoose'); // require mongoose module
 var conn = mongoose.connect('mongodb://127.0.0.1/vaibhavp'); // connection to mongodb

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
   
    return function (req, res, next) {
	  req.Collection_user = users;
	  next();
    }

};
