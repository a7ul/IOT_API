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

//app post functions
var setState = function(req, res){
	for(var key in req.body){
		currentState[key] = req.body[key] ;
	}
	console.log(currentState);
	res.end('ok : ' + currentState);
};

//app post routes

app.post('/set-state', setState);

// listen to port 3000
app.listen(3000);