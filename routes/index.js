var express = require('express'); // require express module
var app = express(); // creatig insatnce of express function 
var router = express.Router();

<!--- insert data into mongodb ---->

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

<!--------- fetch data from mongodb through url ---->

router.all('/users/create/:id', function (req, res) {
 var userid = req.params.id;
 req.Collection_user.find({
     "_id": userid,
    }, function(err, docs) {
     if (err){
        res.json("You Entered a Invalid Id");
        console.log("You Entered a Invalid Id")
        throw (err);
        process.exit();
      }else {  
        console.log(docs);
        res.json(docs);
      }
  });
});
module.exports = router;