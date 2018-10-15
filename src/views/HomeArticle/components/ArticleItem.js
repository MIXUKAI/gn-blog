import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
    <Item>
      <div className="row" style={{position: 'relative'}}>
        <CreateAt>{ time }</CreateAt>
        { tag.length && <i className="iconfont" style={{verticalAlign:'bottom'}}>&#xe715;</i> }
        {tag.map((item, index) => <StyledLinkTag key={index} to={`/tags/${item}`}>{item}</StyledLinkTag>) }
      </div>
      <Link to={{pathname: `/article/${id}`}}>
        <Title><span>{ title }</span></Title>
      </Link>
      <Summary>{ summary }</Summary>
      <div style={{paddingTop: 15}}>
        <Link to={{ pathname: `/article/${id}` }} style={{ color: '#588CF8'}}>
          ...阅读全文
        </Link>
      </div>
    </Item>
  );
};

export default ArticleItem;


const Item = styled.div`
  position: relative;
  padding: 20px;
  width: 100%;
  color: #44613E;
  cursor: pointer;
  background-image: linear-gradient(to right, rgb(245,245,245), rgb(246, 249, 252));
  background-color: rgb(246, 249, 252);
  margin-bottom: 7px;
  border-radius: 4px;
  transition: box-shadow .3s ease-in;
  &:hover {
    box-shadow: 0 2px 10px rgba(0,0,0,.2);
  }
  a {
    text-decoration: none;
  }
`;

const CreateAt = styled.span`
  padding-left: 8px;
  border-left: 5px solid #588CF8;
  font-size: 14px;
  color: #588CF8;
  margin-right: 10px;
`;

const Title = styled.h2`
  margin: 16px 0 15px 0;
  font-size: 20px;
  font-family: 'Garamond', 'Georgia', serif;
  font-weight: bold;
  color: #2c3e50;
  span {
    padding-bottom: 2px;
  }
`;

const Summary = styled.p`
  margin: 0;
  font-size: 14px;
  color: #61b2a7;
`;
