import React from 'react';
import styled from 'styled-components';

import Li from './ListLi';

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
            <Li key={item._id} time={item.createAt} id={item._id}>
              { item.title }
            </Li>
          ) 
        }
      </UlWrap>
    </div>
  );
}

export default YearBlock;