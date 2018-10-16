import React from 'react';
import PropTypes from 'prop-types';
import ArticleItem from './ArticleItem/ArticleItem';
import moment from 'moment';

const ArticleList = (props)  => {
  const articleItems = props.data.map(item => {
    const { _id, title, createAt, description, tags } = item;
    const formatTime = moment(createAt).format('YYYY-MM-DD');
    return (
      <ArticleItem key={_id} title={title} time={formatTime} summary={description} id={_id} tag={tags} />
    );
  });
  return (
    <div>
      { articleItems }
    </div>
  )
}
ArticleList.propTypes = {
  data: PropTypes.array.isRequired
}
export default ArticleList;