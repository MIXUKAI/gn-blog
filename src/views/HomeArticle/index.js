import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import baseApiURL from '../../utils/api';
import ArticleList from './components/ArticleList';
import Pagination from './components/Pagination';

class HomeArticles extends Component {
  state = {
    articles: [],
    page: 1
  }

  handlePopState = (popState) => {
    const state = popState.state;
    // 存在的话
    if (state) {
      if (state.state) {
        const page = state.state.page;
        this.fetchData(page);
      }
    }
  }

  // ajax请求获取数据
  getArticlesfromDB = (targetPage) => {
    // 已经控制了传入的page指因此不用再判断了
    const url = `${baseApiURL}/article/?page=${targetPage}`;

    this.props.loading(true);

    axios.get(url)
      .then(res => {
        // TODO: 现在是为了效果，以后改掉
        this.setState({ articles: res.data, page: targetPage });
        this.props.loading(false);
      });
  }

  // 获取数据，从缓存或者ajax请求
  fetchData = (targetPage) => {
    const articles = sessionStorage.getItem(`articlePage${targetPage}`);
    if (!articles) {
      this.getArticlesfromDB(targetPage);
    } else {
      this.setState({ articles: JSON.parse(articles), page: targetPage });
    }
    this.props.history.push(`/page/${targetPage}`, { targetPage });
  }

  handleNext = () => {
    this.fetchData(this.state.page + 1);
  }

  handlePrev = () => {
    this.fetchData(this.state.page - 1);
  }

  componentDidMount() {
    // 监听popstate事件，当history.back等操作的时候重新获取数据
    window.addEventListener('popstate', this.handlePopState);

    const page = parseInt(this.props.match.params.page);
    const articles = sessionStorage.getItem(`articlePage${page}`);
    // 不存在的话发送请求
    if (!articles) {
      this.getArticlesfromDB(page);
    } else {
      this.setState({ articles: JSON.parse(articles), page });
    }
    // 注意这里不能pushstate，之前直接调用this.fetchData(page), 组件重新挂载的时候就pushState，造成了bug
  }

  // storeSessionStorage = (targetState) => {
  //   const { page, articles } = targetState;
  //   sessionStorage.setItem(`articles${page}`, JSON.stringify(articles));
  //   sessionStorage.setItem(`articlesDate${page}`, Date.now());
  // };

  componentDidUpdate(prevProps, prevState) {
    const nowpage = this.state.page;
    // TODO: 这里存储优化下？
    if (this.state.articles.length !== 0) {
      sessionStorage.setItem(`articlePage${nowpage}`, JSON.stringify(this.state.articles));
      sessionStorage.setItem(`articlePageDate${nowpage}`, Date.now());  
    }
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.handlePopState);
  }

  render() {
    const { articles, page } = this.state;
    return (
      <div>
        <ArticleList articles={articles} />
        <Pagination next={this.handleNext} prev={this.handlePrev} style={{ paddingTop: 20, overflow: 'hidden' }} page={page} />
      </div>
    );
  }
}

export default withRouter(HomeArticles);