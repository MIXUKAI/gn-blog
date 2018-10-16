import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import './ArticleItem.scss';

const StyledLinkTag = styled(Link)`
  color: #44613E;
  margin: 0 5px;
  border-bottom: 1px solid #44613E;
  &::before {
    content: '#'
  }
  &:hover {
    border-color: #351565;
    border-width: 2px;
  }
`

const ArticleItem = ({time, title, summary, id, tag }) => {
  return (
    <div className="article-item">
      <div className="row" style={{position: 'relative'}}>
        <span className="create-at">{ time }</span>
        { tag.length && <i className="iconfont" style={{verticalAlign:'bottom'}}>&#xe715;</i> }
        {tag.map((item, index) => <StyledLinkTag key={index} to={`/tags/${item}`}>{item}</StyledLinkTag>) }
      </div>
      <Link to={`/article/${id}`}>
        <h2 className="item-title"><span>{ title }</span></h2>
      </Link>
      <p className="item-summary">{ summary }</p>
      <div style={{paddingTop: 15}}>
        <Link to={`/article/${id}`} className="read-more">
          ...阅读全文
        </Link>
      </div>
    </div>
  );
};

ArticleItem.propTypes = {
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string,
  id: PropTypes.string.isRequired,
  tag: PropTypes.array
}

export default ArticleItem;
