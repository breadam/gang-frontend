'use strict';

var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');
var http = require('http').Server(app);

var config = require(__dirname + "/config");

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser());
app.use(express.static(__dirname + '/public'));

http.listen(config.port, function(){
	console.log('express listening');
});