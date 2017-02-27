var axios = require('axios');



var scrape = {
	var timesAPI = "b37393133d13436c9e1fd524b2b39738";

	var helpers = {
		runQuery: function(articlepost) {
			console.log(articlepost);

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + timesAPI + "&q=" + articlepost;
			return axios.get(queryURL).then(function(response){

				console.log(response);
				return response.data.results[0].formatted;
			});
		},
		fetchHistory: function() {
    		var queryURL = "/api" // UPDATE API Route
    		return axios.get(queryURL);
  		},
  
  		saveSearch: function(articleSearch) {
    		var search = {
      		search: articleSearch
    	}

    	axios.post('/api', search).then((doc) => { //UPDATE API ROUTE
      		return doc
    		}).catch((err) =>{
      			return err
    		})
  		}
	};

	module.exports = helpers;
};

