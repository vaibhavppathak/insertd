// the middleware function
var Grid = require('gridfs-stream'); // 1.1.1"
var mongo = require('mongodb'); // 2.0.31
module.exports = function() {
    var mongoose = require('mongoose'); //require mongoose module
    var db = new mongo.Db('vaibhavp', new mongo.Server('127.0.0.1', 27017));
    var gfs;
    db.open(function(err, db) {
        if (err) throw err;
        gfs = Grid(db, mongo);
    });

    // Create Schema
    var userschema = mongoose.Schema({
        filename: String,
        content: String,

    }, {
        strict: true,
        collection: 'User_detail'
    });

    // var users = conn.model('Users', userschema); // create module

    return function(req, res, next) {
        // req.Collection_user = users;
        req.connection=gfs;
        next();
    }
};