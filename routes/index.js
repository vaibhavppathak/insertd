var express = require('express'); // require express module
var app = express(); // creatig insatnce of express function 
var router = express.Router();

router.all('/users/create', function (req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
 if(name.length > 0 && email.length > 0 && password.length > 0){
       var record = new req.Collection_user({
          "name": name,
          "email": email,
          "password":password,
        });
       record.save(function (err) {
          if(err){
               throw error;
            } else {
              console.log("record is inserted successfully");
              res.send("Record inserted successfully");
            }
        }); 
    }else{
        console.log("Record is not inserted");
        res.send("Record is not inserted");
    }    
});
module.exports = router;