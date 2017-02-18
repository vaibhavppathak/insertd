var multer = require('multer');
var express = require('express');
var mongoose =require('mongoose');
var fs = require('fs');
var Grid = require('gridfs-stream');
var router = express.Router();
var upload = multer({dest: 'uploads/'});

router.post('/upload', upload.any(), function (req, res) {
    var path = req.files[0].path
    var path_name = req.files[0].originalname
    var gfs = req.connection;
    var writestream = gfs.createWriteStream({
        filename: path_name
    });
    fs.createReadStream(path).pipe(writestream);
    writestream.on('close', function (file) {
        res.json(file.filename + 'Written To DB');   
    });
})
module.exports = router;