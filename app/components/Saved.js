var React = require('react');

var Query = require('./Query');
var Results = require('./Results');

//create Saved component
var Saved = React.createClass({
	render: function() {
		return(
			<div className="panel panel-primary">
				<div className="panel-heading">Saved</div>

				<div className="panel panel-default">
  						<div className="panel-body">
    						Basic panel example
    						<div className="btn btn-primary btn-group-sm" role="group" aria-label="...">Remove</div>

  						</div>
					</div>


			</div>

			);
	}
});

module.exports = Saved;