//globals 
var express = require('express');
var path = require('path');
var bodyparser = require('body-parser');
var app = express();
var db = require('./db_control');
var _ = require('lodash');
var data = {
	light: 0,
	fan: 0
};

// app use
app.use(bodyparser.urlencoded({
	extended: false
}));

app.use(express.static(path.join(__dirname, 'public')));

//app set

app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'jade');

//app get routes

app.get('/update', function (req, res) {

	console.log(req.query);

	if (req.query.thing === 'light') {
		data.light++;
	}
	if (req.query.thing === 'fan') {
		data.fan++;
	}

	console.log(data);

	res.end();

});

app.get('/viewdevices', function (req, res) {

	res.render('viewdevices', { fan: data.fan });

});


app.get('/receive', function(req, res){
	
	console.log(req.query.devKey);
	
});

//app post routes

//app.post('/update', function (req, res) {
//
//	if (req.body.thing === 'light') {
//		data.light++;
//	}
//	if (req.body.thing === 'fan') {
//		data.fan++;
//	}
//
//	console.log(data);
//
//	res.end();
//
//});
//
//app.post('/new-user', function (req, res) {
//
//	db.users.save(req.body, function (err, saved) {
//		if (err || !saved) console.log("User not saved");
//		else console.log("User saved");
//	});
//
//	res.end('User Successfully signed up');
//
//});
//
//app.post('/home', function (req, res) {
//	db.users.find({}, function (err, users) {
//		var loginUser = _.filter(users, { name: req.body.name });
//		if (loginUser.length === 1 && loginUser[0].password === req.body.password) {
//			res.render('viewdevices', { fan: data.fan });
//		}
//		else {
//			res.end('Wrong login');
//		}
//	});
//});

//temporary scripts

//db.users.save({ name: "meenakshi", password: "meenakshi123", sex: "male" }, function (err, saved) {
//	if (err || !saved) console.log("User not saved");
//	else console.log("User saved");
//});
//
//db.users.find({}, function (err, users) {
//	if (err || !users) console.log("No users found");
//	else users.forEach(function (femaleUser) {
//		console.log(femaleUser);
//	});
//});
//
//db.users.remove({}, function (err, docs) {
//	if (err) return err;
//	console.log(docs);
//});

app.listen(3000);