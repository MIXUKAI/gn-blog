import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import '../../styles/markdown.scss';
import '../../styles/solarized-light.css';

import baseApiURL from '../../utils/api';
import TagList from './components/TagList'
import Title from './components/Title';
import Anchor from './components/Anchor';
import Layout from '../layout/ArticleLayout';
import myMarked from '../../utils/my_marked';
import getHeaders from '../../utils/getHeaders';

class Article extends Component {
  constructor(props) {
    super(props)
    this.state = {
      article: {},
      anchorInfos: []
    }
  }

  parseMardown() {
    const { md_content='' } = this.state.article;
    return { __html: myMarked(md_content)};
  }

  // 在内容渲染完毕之后去获取各个标题
  getAnchorInfos = () => {
    const anchorInfos = getHeaders('md-body');
    this.setState({ anchorInfos });
  }

  getArticleById = (id) => {
    this.props.loading(true);

    const url = `${baseApiURL}/article/${id}`;
    axios.get(url)
      .then(res => {
        this.props.loading(false);
        const data = res.data;
        const { title, createAt, tags, md_content } = data;
        const article = { title, createAt, tags, md_content };
        this.setState({ article }, this.getAnchorInfos);
      })
      .catch(err => console.log(err));
  }

  componentDidUpdate(prevProps, prevState) {
    const id = this.props.match.params.id;
    sessionStorage.setItem(`article_${id}`, JSON.stringify(this.state.article));
    sessionStorage.setItem(`article_date_${id}`, Date.now());
  }

  fetchData = (articleId) => {
    const article = sessionStorage.getItem(`article_${articleId}`);
    if (article) {
      this.setState({ article: JSON.parse(article) }, this.getAnchorInfos);
    } else {
      this.getArticleById(articleId);
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.fetchData(id);
  }

  render() {
    const { title='', createAt='', tags=[] } = this.state.article;
    return (
      <Layout>
        <div>
          <Title className="article-title">{ title }</Title>
          <ArticleData><span>{ createAt }</span></ArticleData>
          <TagList tags={ tags }/>
          <Content dangerouslySetInnerHTML={ this.parseMardown() } className="md-body">
          </Content>
        </div>
        <div style={{ position: 'relative', width: 930, textAlign: 'right' }}>
          <Anchor content={this.state.anchorInfos} match={this.props.match}/>
        </div>
      </Layout>
    )
  };
};

export default Article;

const ArticleData = styled.p`
  font-size: 12px;
  color: grey;
  font-weight: 700;
  padding: 0 0 0 5px;
  text-align: center;
`;

const Content = styled.div`
  margin-top: 20px;
  font-size: 14px;
  color: #414141;
  p {
    margin: 12px 10px;
  }
`;