//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var request = require('request');
var cheerio = require('cheerio');
var Promise = require('bluebird');
var React = require('react');

var Article = require('./models/Article.js')

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

app.get('/', function(request, result){
	result.send('./public/index.html');
})

app.get('/scrape', function(request, result) {
	request('https://www.nytimes.com/', function(error, response, html) {
		var $ = cheerio.load(html);
		
	})
})

//List on port 27017
app.listen(27017, function() {
	console.log("app running on port 27017");
});