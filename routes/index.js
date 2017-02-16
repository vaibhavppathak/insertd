var express = require('express'); // require express module
var app = express(); // creatig insatnce of express function 
var router = express.Router();

router.all('/users/:id', function (req, res) {
 console.log(req.params.id);;
 var userid = req.params.id;
 req.Collection_user.find({
  "_id": userid,
}, function(err, docs) {

  if (!err) {
    if (docs.length > 0) {
      console.log(docs);
      res.send(docs);

    }
  }
});
});
module.exports = router;