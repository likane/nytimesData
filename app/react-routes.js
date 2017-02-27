var React = require('react');
var router = require('react-router');
var Route = router.Route;
var Router = router.Router;
var IndexRoute = router.IndexRoute;
var hashHistory = router.hashHistory;

var Main = require('./components/Main');
var Query = require('./components/Query');
var Results = require('./components/Results');
var Search = require('./components/Search');

module.exports = (
	<Router history={hashHistory} >
		<Route path='/' component={Main}>
		<Route path='search' component={Search} />
		<Route path='saved' component={Saved} />

		<IndexRoute component={Search} />

		</Route>

	</Router>



	);