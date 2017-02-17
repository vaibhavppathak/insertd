var express = require('express'); //require express module
var app = express(); //creatig insatnce of express function 
var router = express.Router(); //Creating Router() object



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
    req.Collection_user.findOne({"email": email_id},function (err, data) {             
      if(err){
          throw err;
        }else if(data != null){     
            data.remove() 
            res.json("Data removed from Database"); 
        }else{
           res.json("Data is not found"); 
        }
    });
});

module.exports = router;