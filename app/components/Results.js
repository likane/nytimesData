var React = require('react');

var Query = require('./Query');
var Search = require('./Search');

//create Saved component
var Results = React.createClass({
	render: function() {
		return(
				<div className="panel panel-primary">
					<div className="panel-heading">Results</div>

					<div className="panel panel-default">
  						<div className="panel-body">
    						{this.props.searchResults.map(function(search, i){
            					return (
              					<div key={i} class="container">
                					<h4>{search.title}</h4>
                				</div>
    						<div className="btn btn-primary btn-group-sm" role="group" aria-label="...">Save</div>

  						</div>
					</div>


				</div>
			);
	}
});

module.exports = Results;