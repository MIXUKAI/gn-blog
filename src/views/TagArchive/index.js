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

  fetchAllArticles = () => {
    const url = `${baseApiUrl}/article/all`;
    axios.get(url)
      .then(res => {
        const data = res.data;
        this.setState({ articles: data, tags: getTags(data) });
      }).catch(err => {
        console.error(err);
      })
  }

  getArticleByTagName = (tagname) => {
    const url = `${baseApiUrl}/article/tag/${tagname}`;
    axios.get(url)
      .then(res => {
        const data = res.data;
        console.log(data);
        this.setState({ articles: data });
      })
      .catch(err => console.log(err));
  }

  componentDidUpdate(prevProps) {
    console.log('did update');
    if (prevProps.match.params.name !== this.props.match.params.name) {
      if (this.props.match.params.name === void 0) {
        this.fetchAllArticles();
        return;
      }
      this.getArticleByTagName(this.props.match.params.name);
    }
  }

  componentDidMount() {
    console.log('did mount')
    if (this.props.match.params.name === void 0) {
      this.fetchAllArticles();
      return;
    }
    this.getArticleByTagName(this.props.match.params.name);
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
