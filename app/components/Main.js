//include react
var React = require('react');

var Search = require('./Seach');
var Saved = require('./Saved');

var Main = React.createClass({


	render: function() {
		return(
				<div className="container">
        			<div className="row">
          				<div className="jumbotron">
            				<h2>Warmup!</h2>
            				<p>
              					<em>Components and Sub-components</em>
            				</p>
          				</div>
          				<div>
          					
          						<Seach />
          				</div>
          				<div>
          						<Saved />
          				</div>
          			</div>
          		</div>

			);
	}
});

module.exports = Main;