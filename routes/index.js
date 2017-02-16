var express = require('express'); // require express module
var app = express(); // creatig insatnce of express function 
var router = express.Router();

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