import React from 'react';
import axios from 'axios';

import TagContainer from './components/TagContainer';
import List from './components/List';
import baseApiUrl from '../../utils/api';
import getTags from '../../utils/getAllTag';

class TagArchive extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      articles: []
    }
  }

  storeTags = (tags) => {
    if (this.state.tags.length !== 0) {
      sessionStorage.setItem('tags', JSON.stringify(tags));
      sessionStorage.setItem('tagsDate', Date.now());
    }
  }

  fetchAllTags = () => {
    const url = `${baseApiUrl}/article/all`;
    this.props.loading(true);
    axios.get(url)
      .then(res => {
        const data = res.data;
        const tags = getTags(data);
        this.setState({ tags }, () => this.storeTags(tags));
        this.props.loading(false);
      }).catch(err => {
        console.error(err);
      })
  }

  fetchAllArticles = () => {
    const url = `${baseApiUrl}/article/all`;
    this.props.loading(true);
    axios.get(url)
      .then(res => {
        const data = res.data;
        this.setState({ articles: data });
        if (sessionStorage.getItem('tags')) {
          const tags = JSON.parse(sessionStorage.getItem('tags'));
          this.setState({ tags });
        } else {
          const tags = getTags(data);
          this.setState({ tags }, () => this.storeTags(tags));
        }
        this.props.loading(false);
      }).catch(err => {
        console.error(err);
      })
  }

  getArticleByTagName = (tagname) => {
    const url = `${baseApiUrl}/article/tag/${tagname}`;
    this.props.loading(true);
    axios.get(url)
      .then(res => {
        const data = res.data;
        this.setState({ articles: data });
        this.props.loading(false);
      })
      .catch(err => console.log(err));
  }

  componentDidUpdate(prevProps) {

    if (prevProps.match.params.name !== this.props.match.params.name) {
      if (this.props.match.params.name === void 0) {
        this.fetchAllArticles();
        return;
      }
      this.getArticleByTagName(this.props.match.params.name);
    }
  }

  componentDidMount() {
    const tagName = this.props.match.params.name;
    if (tagName !== void 0) {
      if (!sessionStorage.getItem('tags')) {
        this.fetchAllTags();
      }
      this.getArticleByTagName(tagName);
    } else {
      this.fetchAllArticles();
    }
  }
  
  render() {
    const { tags, articles } = this.state;
    return(
      <div>
        <TagContainer data={tags}/>
        <List data={articles}/>
      </div>
    );
  }
}

export default TagArchive;
