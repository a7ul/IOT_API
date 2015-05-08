//globals 
var express = require('express');
var path = require('path');
var bodyparser = require('body-parser');
var app = express();
var db = require('./db_control');

var currentState = {
	
} ;

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

	res.end(currentState[req.query.device]);

});

//app post routes

app.post('/set-state', function(req, res){
	console.log(req.body);
	currentState = req.body ;
	console.log(currentState);
	res.end('ok : ' + currentState);
});


app.listen(3000);