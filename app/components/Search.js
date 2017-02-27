var React = require('react');

var Query = require('./Query');
var Results = require('./Results');

//create Saved component
var Search = React.createClass({
	render: function() {
		return(
				<div className="panel panel-primary">
					<div className="panel-heading">Search</div>
					<div className="panel-body">
    					<div className="input-group">
 
  							<input type="text" className="form-control" placeholder="Topic" aria-describedby="sizing-addon2">
  							<input type="text" className="form-control" placeholder="Start Year" aria-describedby="sizing-addon2">
  							<input type="text" className="form-control" placeholder="End Year" aria-describedby="sizing-addon2">

  							<div className="btn btn-primary btn-group-lg" role="group" aria-label="...">Search</div>

						</div>
  					</div>

				</div>
			);
	}
});

module.exports = Search;