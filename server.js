//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var request = require('request');
var cheerio = require('cheerio');
var Promise = require('bluebird');

mongoose.Promise = Promise;

//init express
var app = express();

//morgan and body parser with app
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
	extended: false
}));

//make public static dir
app.use(express.static('public'));

//database config w/ mongoose
mongoose.connect('mongodb://localhost/nycreact');
var db = mongoose.connection;

//check mongoose errors
db.on('error', function(error) {
	console.log('Mongoose Error: ', error);
});

//logged into mongoose db success
db.once('open', function() {
	console.log('Mongoose connection successful');
});

//List on port 27017
app.listen(27017, function() {
	console.log("app running on port 27017");
});