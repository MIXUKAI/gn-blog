import React, { Component } from 'react';
import axios from 'axios';

import baseApiURL from '../../utils/api';
import ArticleList from './components/ArticleList';
import Pagination from './components/Pagination';

const pageRe = /page=(\d*)&?/;

function setUrl(page) {
  let url = `${window.location.pathname}?page=${page}`;
  let title = window.document.title;
  let stateObj = { page, title };
  window.history.pushState(stateObj, title, url);
};

class HomeArticles extends Component {
  state = {
    articles: [],
    page: 1
  }

  handlePopState = (popState) => {
    // 不为null
    if (popState.state) {
      const page = popState.state.page;
      this.fetchData(page);
    }
  }

  // ajax请求获取数据
  getArticlesfromDB = (page) => {
    // 已经控制了传入的page指因此不用再判断了
    const url = `${baseApiURL}/article/?page=${page}`;
      
    this.props.loading(true);
    
    axios.get(url)
      .then(res => {
        // TODO: 现在是为了效果，以后改掉
        console.log(res.data);
        setTimeout(() => {
          // history.pushState
          setUrl(page);
          this.setState({ articles: res.data, page });
          this.props.loading(false);
        }, 300);
      });
  }

  // 获取数据，从缓存或者ajax请求
  fetchData = (page) => {
    // 读取某个page页面缓存
    const articles = localStorage.getItem(`articles${page}`);
    // 不存在的话发送请求
    if (!articles) {
      this.getArticlesfromDB(page);
    } else {
      this.setState({articles: JSON.parse(articles), page});
      setUrl(page);
    }
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

    // 根据url来读取page的value，在刷新页面或者重新路由到该组件的时候有用
    const result = window.location.href.match(pageRe);
    // 默认值为1
    let page = 1;
    if (result) {
      // page 此时为string
      const value = parseInt(result[1]);
      // page的数字有效不为NaN
      if (!Number.isNaN(value)) {
        page = value;
      }
    }
    this.fetchData(page);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // TODO: 这里不能用&&是因为促使的时候，两个page都为1，到时候这里改善下
    if (this.state.articles !== nextState.articles ||
        this.state.page !== nextState.page) {
      return true;
    }
    return false;
  }

  componentWillUpdate(nextProps, nextState) {
    // 只要state更新并且通过shouldComponentUpdate就会在localStorage中存储数据
    // 但是如果还是旧的数据的话只有date会变，因为articles本来就是从这里读取的
    // TODO：判断时间来看时候失效
    const page = nextState.page;
    localStorage.setItem(`articles${page}`, JSON.stringify(nextState.articles));
    localStorage.setItem(`articlesDate${page}`, Date.now());
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

export default HomeArticles;