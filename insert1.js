var mongoose = require('mongoose'); //require mongoose native drivers
var crypto = require('crypto');
var url = 'mongodb://localhost/vaibhav'; //connection url of the database
var conn = mongoose.connect(url); //use the connect method to conenct to the server
var post_schema = new mongoose.Schema({
    firstname: String,
    email: String,
    lastname: String,
    password: String,
}, {
    strict: true,
    collection: 'Users',
});

var post = conn.model('post', post_schema);
var conn = mongoose.createConnection(url, function(error, db) {
    if (error) {
        console.log("Unabel to connect to mongo server ERROR");
    } else {
        console.log("Connection succesfull");
        const pass = "abc@123";
        var secret = crypto.createHash('md5', pass).digest('hex');
        // console.log(hash);
        var detail = new post({
            "firstname": "vaibhav_pathak",
            "email": "vaibhav@gmail.com",
            "lastname": "Pathak",
            "password": secret,
        });

        detail.save(function(err, records) {
            if (err) {
                throw error;
            } else {
                console.log(records)
            }
        });
    }
});