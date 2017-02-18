// the middleware function
var Grid = require('gridfs-stream'); // 1.1.1"
var mongo = require('mongodb'); // 2.0.31
module.exports = function() {
    var mongoose = require('mongoose'); //require mongoose module
    var conn = mongoose.connect('mongodb://127.0.0.1/vaibhavp'); //connection to mongodb
    var db = new mongo.Db('vaibhavp', new mongo.Server('127.0.0.1', 27017));
    // create schema 
    var userschema = mongoose.Schema({
        name: String,
        email: String,
        password: String,
    }, {
        strict: true,
        collection: 'User_detail'
    });
    //connection to mongodb
    var users = conn.model('Users', userschema);

    var gfs;
    db.open(function(err, db) {
        if (err) throw err;
        gfs = Grid(db, mongo);
    });
    return function(req, res, next) {
        req.Collection_user = users;
        req.connection = gfs;
        next();
    }
}