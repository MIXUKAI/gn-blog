import React from 'react';
import styled from 'styled-components';

import Item from './Item';

const Year = styled.h2`
  font-size: 28px;
  margin-bottom: 5px;
`
const UlWrap = styled.ul`
  color: '#333';
  padding-left: 20px;
`

const YearBlock = ({ year, data }) => {
  return (
    <div style={{ margin: '15px 0' }}>
      <Year>{ year }</Year>
      <UlWrap>
        { 
          data.map(item => 
            <Item key={item._id} time={item.createAt}>
              { item.title }
            </Item>
          ) 
        }
      </UlWrap>
    </div>
  );
}

export default YearBlock;