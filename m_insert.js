var mongoose = require('mongoose'); //require mongoose native drivers
var async = require('async'); //require async drivers
var crypto = require('crypto'); //require crypto drivers
var url = 'mongodb://localhost/vaibhav'; //connection url of the database
var conn = mongoose.connect(url); //use the connect method to conenct to the server
var users_schema = new mongoose.Schema({
    firstname: String,
    email: String,
    lastname: String,
    password: String,
}, {
    strict: true,
    collection: 'Users',
});

var usersprofile_schema = mongoose.Schema({
    user_id: String,
    dob: String,
    mobile_no: Number,
}, {
    strict: true,
    collection: 'UsersProfile'
})

var users = conn.model('xyz', users_schema);
var users_profile = conn.model('xyz1', usersprofile_schema);

var records = [];
for (var i = 1; i <= 5; i++) {
    records.push({
        "fname": "Vaibhav" + i,
        "email": "vaibhav" + i + "@gmail.com",
        "lname": "Pathak",
    });
}
//console.log(records);

insertAndNotify(records, function(err) {
    if (err) {
        console.log(err);
        process.exit();
    }
    console.log('Data enter into Users!!');
    // process.exit();
    //continue all insert is done
});
const pass = "abc@123";
var secret = crypto.createHash('md5', pass).digest('hex');

function insertAndNotify(records, main_callback) {
    async.eachLimit(records, 3, function(row, callback) {
        var details = new users({
            firstname: row.fname,
            email: row.email,
            lastname: row.lname,
            password: secret,
        });
        details.save(function(err, row) {
            if (err) {
                console.log(err);
                callback(err); // calling the callback function
            } else {
                var id = row.get('_id');
                //console.log(id);
                update(id); // calling the update function
                callback();
            }
        });
    }, function(err) {
        main_callback(err); // calling the main_callback function
    });
}

function update(id) {
    var row = id;
    //console.log(row);
    var details = new users_profile({
        user_id: id,
        dob: "1994-12-21",
        mobile_no: "9560234581"
    });
    details.save(function(err) {
        if (err) {
            console.log(err);
            process.exit();
        }
    });
}