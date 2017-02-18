var express =  require('express');
var multer = require('multer');
var fs = require('fs');
var Grid = require('gridfs-stream');
var router = express.Router();
var upload = multer({dest: 'uploads/'});


mongoose.createConnection('mongodb://127.0.0.1/obi');
router.post('/upload', upload.any(), function (req, res) {
    var conn = mongoose.connection;
    var Grid = require('gridfs-stream');
    Grid.mongo = mongoose.mongo;
    var path = req.files[0].path
    var path_name = req.files[0].originalname
    var gfs = Grid(conn.db);
    var writestream = gfs.createWriteStream({
        filename: path_name
    });
    fs.createReadStream(path).pipe(writestream);
    writestream.on('close', function (file) {
        res.json(file.filename + 'Written To DB');
        fs.unlink(req.files[0].path, function () {
            res.json({id: file._id, message: "success"});
        });
    });
});
module.exports = router;