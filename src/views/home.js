import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTags } from '../actions';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './layout/HomeLayout';

import Github from './GitHub';
import Side from './Home/components/Side';
import About from './About';
import Article from './HomeArticle';
import Archive from './HomeArchive';
import PropsRoute from '../components/PropsRoute';

class Home extends React.Component {
	componentDidMount() {
		if (!sessionStorage.getItem('tags')) {
			this.props.fetchTags();
		}
	}

	componentDidUpdate() {
		if (this.props.tags.length) {
			sessionStorage.setItem('tags', JSON.stringify(this.props.tags));
			sessionStorage.setItem('tagsDate', Date.now());
		}
	}

	render() {
		const localTags = sessionStorage.getItem('tags');
		let tags;
		tags = localTags ? JSON.parse(localTags) : this.props.tags;
		return (
			<Layout>
				<Github />
				<Side />
				<div style={{ flexBasis: '75%', position: 'relative' }}>
					<Switch>
						<Route exact path="/" render={(props) => <Redirect to="/page/1" {...props} />} />
						<Route path="/page/:page" component={Article} />
						<PropsRoute exact path="/tags" tagData={tags} component={Archive} />
						<PropsRoute path="/tags/:name" tagData={tags} component={Archive} />
						<Route path="/about" component={About} />
					</Switch>
				</div>
			</Layout>
		);
	}
}

Home.propTypes = {
	fetchTags: PropTypes.func.isRequired,
	tags: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
	tags: state.tags.items
});

export default connect(mapStateToProps, { fetchTags })(Home);
