import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import './styles/index.scss';
import '../../styles/solarized-light.css';

import baseApiURL from '../../utils/api';
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
      content: '',
      title: '',
      createAt: '',
      tags: [],
      body: '',
      anchorInfos: []
    }
  }

  parseMardown() {
    return { __html: myMarked(this.state.body)};
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
        this.setState({
          title: data.title,
          createAt: data.createAt,
          tags: data.tags,
          body: data.md_content
        }, this.getAnchorInfos)
      })
      .catch(err => console.log(err));
  }

  // 挂载完毕ajax获取数据
  componentDidMount() {
    const id = this.props.match.params.id;
    this.getArticleById(id);
  }

  render() {
    return (
      <Layout>
        <Title className="article-title">{ this.state.title }</Title>
        <ArticleData>发布于：<span>{ this.state.createAt }</span></ArticleData>
        <TagList tags={this.state.tags}/>
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

// { position: 'relative', width: 930, textAlign: 'right' }}
export default Article;

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