var axios = require('axios');



var scrape = {
	var timesAPI = "b37393133d13436c9e1fd524b2b39738";

	var helpers = {
		runQuery: function(articlepost) {
			console.log(articlepost);

			var queryURL = "https://www.nytimes.com/?WT.z_jog=1&hF=f&vS=undefined" + article + "&pretty=1&key" + timesAPI;

			return axios.get(queryURL).then(function(response){

				console.log(response);
				return response.data.results[0].formatted;
			});
		}
	};

	module.exports = helpers;
};

