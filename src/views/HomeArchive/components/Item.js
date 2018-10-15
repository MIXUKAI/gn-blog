import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import moment from 'moment';

const ItemWrap = styled.li`
  padding: 3px 0 3px;
  list-style: square;
`
const StyledLink = styled(Link)`
  color: #333;
  text-decoration: none;
  &:hover {
    color: #3662A2;
    text-decoration: underline;
  }
`


const Item = (props) => {
  const { children, time, id } = props;
  const formatedTime = moment(time).format('MMM Do');
  return (
    <ItemWrap>
      <StyledLink to={`/article/${id}`}>
        { children }
        <span className="item-time" style={{color:'#666', fontSize: 14, paddingLeft: 8}}>{ formatedTime }</span>
      </StyledLink>
    </ItemWrap>
  );
}

Item.defaultProps = {
  time: '1669-546'
}

export default Item;