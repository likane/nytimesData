var Article = require('../models/Article.js');
var Search = require('../components/Search.js');
var Saved.js = require('../components/saved.js');

module.exports = function(app) {

	app.get('/', function(request, result){
		result.sendFile(__dirname + '../public/index.html');

	});

	
}