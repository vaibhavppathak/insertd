var express = require('express'); //require express module
var app = express(); //creatig insatnce of express function 
var router = express.Router();

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
module.exports = router;