var mongoose = require('mongoose');
var conn = mongoose.connect('mongodb://127.0.0.1/vaibhav');
var post_schema = mongoose.Schema({}, {
    strict: false,
    collection: 'Users'
});

var post_schema1 = mongoose.Schema({}, {
    strict: false,
    collection: 'UsersProfile'
})
var post = conn.model('post', post_schema);
var post1 = conn.model('post1', post_schema1);

post.find({
    email: /vaibhav@gmail.com/i
}, function(err, result) {
    if (err) {
        console.log(err);
        process.exit();
    } else {
        for (var i = 0; i < result.length; i++) {
            var row = result[i];
            var id = row.get('_id');
            var email = row.get('email');
            console.log('category: ' + email + ' with _id: ' + id);
        }
    }
});

post1.find({
    email: /vaibhav@gmail.com/i
}, function(err, result) {
    if (err) {
        console.log(err);
        process.exit();
    }

    if (!result || result.length == 0) {
        var new_post = new post1({
            user_id: "123",
            dob: "1994-12-21",
            mobile_no: "9560234581"
        });
        new_post.save(function(err) {

            if (err) {
                console.log(err);
                process.exit();
            }
            console.log('Post Saved')
        });
    }
});