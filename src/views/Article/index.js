import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchArticleById } from '../../actions/articleActions';

import './styles/index.scss';
import '../../styles/solarized-light.css';

import TagList from './components/TagList'
import Anchor from './components/Anchor';
import Top from './components/Top';
import Layout from '../layout/ArticleLayout';
import myMarked from '../../utils/my_marked';
import getHeaders from '../../utils/getHeaders';

class Article extends Component {
  constructor(props) {
    super(props)
    this.state = {
      anchorInfos: []
    }
  }

  parseMardown() {
    const { md_content='' } = this.props.article;
    return { __html: myMarked(md_content)};
  }

  getAnchorInfos = () => {
    const anchorInfos = getHeaders('md-body');
    this.setState({ anchorInfos });
  }

  componentDidUpdate(prevProps, prevState) {
    const id = this.props.match.params.id;
    if (prevProps.article !== this.props.article) {
      this.getAnchorInfos();
    }
    // sessionStorage.setItem(`article_${id}`, JSON.stringify(this.state.article));
    // sessionStorage.setItem(`article_date_${id}`, Date.now());
  }

  fetchData = (articleId) => {
    const article = sessionStorage.getItem(`article_${articleId}`);
    if (article) {
      this.setState({ article: JSON.parse(article) });
    } else {
      this.getArticleById(articleId);
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchArticleById(id);
  }

  render() {
    const { title='', createAt='', tags=[] } = this.props.article;
    return (
      <Layout>
        <Title className="article-title">{ title }</Title>
        <ArticleData>发布于：<span>{ createAt }</span></ArticleData>
        <TagList tags={ tags }/>
        <Content dangerouslySetInnerHTML={ this.parseMardown() } className="md-body">
        </Content>
        <div style={{ position: 'relative', width: 930, textAlign: 'right' }}>
        <Anchor content={this.state.anchorInfos}/>
        </div>
        <Top />
      </Layout>
    )
  };
};

Article.propTypes = {
  fetchArticleById: PropTypes.func.isRequired,
  article: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  article: state.article.article
});

export default connect(mapStateToProps, { fetchArticleById })(Article);

const Title = styled.h1`
  margin: 15px 0;
  font-size: 21px;
  font-weight: normal;
`;

const ArticleData = styled.p`
  font-size: 12px;
  color: grey;
  font-weight: 700;
  padding: 0 0 0 5px;
`;

const Content = styled.div`
  padding-top: 10px;
  margin-top: 10px;
  font-size: 14px;
  color: #414141;
  border-top: 1px solid #eee;
  p {
    margin: 12px 10px;
  }
`;