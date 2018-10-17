import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchArticleById } from '../../actions/articleActions';

import './Article.scss';
import '../../styles/solarized-light.css';

import TagList from './components/TagList';
import Anchor from './components/Anchor';
import Layout from '../layout/ArticleLayout';
import myMarked from '../../utils/my_marked';
import getHeaders from '../../utils/getHeaders';

class Article extends Component {
	constructor(props) {
    super(props);
		this.state = {
			anchorInfos: []
		};
	}
	parseMardown() {
		const { md_content } = this.props.article;
		return { __html: myMarked(md_content) };
  }
  
	getAnchorInfos = () => {
		const anchorInfos = getHeaders('md-body');
		this.setState({ anchorInfos });
	};

	componentDidUpdate(prevProps, prevState) {
		const id = this.props.match.params.id;
		sessionStorage.setItem(`article_${id}`, JSON.stringify(this.props.article));
    sessionStorage.setItem(`article_date_${id}`, Date.now());
    // if (prevState.anchorInfos.length === 0) {
    //   this.getAnchorInfos();
    // }
    console.log('did update');
	}

	componentDidMount() {
		const id = this.props.match.params.id;
		this.props.fetchArticleById(id);
	}

	render() {
    const { title, createAt, tags } = this.props.article;
    document.title = `${title}`;
    // const anchorInfos = this.getAnchorInfos();
		return (
			<Layout>
				<div className="article-page">
					<h1 className="article-title">{title}</h1>
					<p className="article-infos">
						<span>{createAt}</span>
					</p>
					<TagList tags={tags} />
					<div dangerouslySetInnerHTML={this.parseMardown()} className="md-body" />
				</div>
				<div style={{ position: 'relative', width: 930, textAlign: 'right' }}>
					<Anchor content={this.state.anchorInfos} match={this.props.match} />
				</div>
			</Layout>
		);
	}
}

Article.propTypes = {
	fetchArticleById: PropTypes.func.isRequired,
	article: PropTypes.object.isRequired
};
const matStateToProps = (state) => ({
	article: state.article.item
});

export default connect(matStateToProps, { fetchArticleById })(Article);
