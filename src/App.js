import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import ScrollToTop from './components/ScrollToTop';
import Home from './views/home.js';
import Article from './views/Article';
import NotFound from './views/NotFound';
import RainBow from './components/RainBow';
import Cover from './components/LoadingCover.js';

const App = (props) => {
	return (
		<Router>
			<ScrollToTop>
				<div style={{ position: 'relative' }}>
					<RainBow />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/about" component={Home} />
						<Route path="/page" component={Home} />
						<Route path="/tags" component={Home} />
						<Route path="/article/:id" component={Article} />
						<Route component={NotFound} />
					</Switch>
					<Cover show={props.loading} />
				</div>
			</ScrollToTop>
		</Router>
	);
};

App.propTypes = {
	loading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
	loading: state.loading.item
});

export default connect(mapStateToProps, {})(App);
