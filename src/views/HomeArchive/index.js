import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import TagContainer from './components/TagContainer';
import List from './components/List';
import baseApiUrl from '../../utils/api';

class TagArchive extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    }
  }

  fetchAllArticles = () => {
    const url = `${baseApiUrl}/article/all`;
    this.props.loading(true);
    axios.get(url)
      .then(res => {
        const data = res.data;
        this.setState({ articles: data });
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
      this.getArticleByTagName(tagName);
    } else {
      this.fetchAllArticles();
    }
  }
  
  render() {
    return(
      <div>
        <TagContainer data={this.props.tagData}/>
        <List data={this.state.articles}/>
      </div>
    );
  }
}

TagArchive.propTypes = {
  tagData: PropTypes.array.isRequired
}

export default TagArchive;
