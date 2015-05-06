var express = require('express');
var http = require('http');
var path = require('path');
var cors = require('cors');

var app = express();

app.configure(function(){
	app.set('port', 8080);
	app.get('/', function(req,res) {
	  res.sendfile('index.html');
	});
	app.use(cors());
});

var request = require('request');

app.get('/api/listings', function(req, res) {
  var url = 'http://api.placester.com/api/v2.1/listings?api_key=3eb444f8869cb88bbc349586573aabbb84a316d7'
  req.pipe(request(url)).pipe(res);
});

http.createServer(app).listen(app.get('port'), function(){});
