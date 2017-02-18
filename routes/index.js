var multer = require('multer');
var express = require('express');
var app = express(); //creatig insatnce of express function 
var mongoose = require('mongoose');
var fs = require('fs');
var Grid = require('gridfs-stream');
var router = express.Router();
var upload = multer({
    dest: 'uploads/'
});

<!--- insert data into mongodb ---->

router.get('/users/create', function(req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    if (name.length > 0 && email.length > 0 && password.length > 0) {
        var record = new req.Collection_user({
            "name": name,
            "email": email,
            "password": password,
        });
        record.save(function(err) {
            if (err) {
                throw error;
            } else {
                res.send("Record inserted successfully");
            }
        });
    } else {
        res.send("Record is not inserted");
    }
});

<!--------- fetch data from mongodb through url -------->

router.all('/users/fetch/:id', function(req, res) {

    var userid = req.params.id;
    req.Collection_user.find({
        "_id": userid,
    }, function(err, docs) {
        if (err) {
            res.json("You Entered a Invalid Id");
        } else {
            res.json(docs);
        }
    });
});

<!----- Delete data from mongodb through url  ----->

router.all('/users/remove/:email', function(req, res) {
    var email_id = req.params.email;
    req.Collection_user.findOne({
        "email": email_id
    }, function(err, data) {
        if (err) {
            throw err;
        } else if (data != null) {
            data.remove()
            res.json("Data removed from Database");
        } else {
            res.json("Data is not found");
        }
    });
});

<!-- file uploading through multer using gfs -->

router.post('/upload', upload.any(), function(req, res) {
    var path = req.files[0].path
    var path_name = req.files[0].originalname
    var gfs = req.connection;
    var writestream = gfs.createWriteStream({
        filename: path_name
    });
    fs.createReadStream(path).pipe(writestream);
    writestream.on('close', function(file) {
        res.json(file.filename + 'Written To DB');
    });
})


module.exports = router;