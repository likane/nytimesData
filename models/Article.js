var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//Create article schema
var ArticleSchema = new Schema({

	title: {
		type: String,
		required: true
	},

	date: {
		type: String;
	},

	url: {
		type: String
		required: true
	}


});

var Article = mongoose.model('Article', ArticleSchema);

//export model
module.exports = Article;