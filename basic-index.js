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

app.get('/get-state', function (req, res) {

	res.end('1');

});




app.listen(3000);