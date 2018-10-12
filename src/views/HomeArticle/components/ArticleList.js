import React, { Component }from 'react';
import ArticleItem from './ArticleItem';
import moment from 'moment';

function generateList(arr) {
  return arr.map((item) => {
    const { _id, title, createAt, description, tags } = item;
    const formatTime = moment(createAt).format('YYYY-MM-DD');
    return (
      <ArticleItem key={_id} title={title} time={formatTime} summary={description} id={_id} tag={tags} />
    );
  });
}

class ArticleList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.articles !== this.props.articles) {
      const result = generateList(this.props.articles);
      this.setState({ list: result });
    }
  }

  render() {
    return (
      <div>
        { this.state.list }
      </div>
    )
  }
}

export default ArticleList;