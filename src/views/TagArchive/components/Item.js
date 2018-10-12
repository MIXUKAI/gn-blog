import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const ItemWrap = styled.li`
  padding: 3px 0 3px;
  list-style: square;
`


const Item = (props) => {
  const { children, time } = props;
  return (
    <ItemWrap>{ children } <span className="item-time" style={{color:'#666', fontSize: 14}}>{ time }</span></ItemWrap>
  );
}

Item.defaultProps = {
  time: '1669-546'
}

export default Item;