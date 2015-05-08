//globals 
var express = require('express');
var path = require('path');
var bodyparser = require('body-parser');
var app = express();
var db = require('./db_control');

var currentState = '0' ;

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

	res.end(currentState);

});

//app post routes

app.post('/set-state', function(req, res){
	currentState = req.body.state ;
	console.log(currentState);
	res.end('ok');
});


app.listen(3000);