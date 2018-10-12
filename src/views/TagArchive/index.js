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

  fetchAllArticles = (url) => {
    axios.get(url)
      .then(res => {
        const data = res.data;
        this.setState({ articles: data, tags: getTags(data) });
      }).catch(err => {
        console.error(err);
      })
  }

  componentDidUpdate() {
    console.log('did update');
    console.log(this.props.match.params.id);
  }

  componentDidMount() {
    console.log('did mount')
    const articleurl = `${baseApiUrl}/article/all`;
    this.fetchAllArticles(articleurl);
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
