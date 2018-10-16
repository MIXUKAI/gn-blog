import React from 'react';
import styled from 'styled-components';

import Icon from '../../../components/Icon';
import Avatar from './Avatar';
import Links from './Links';

const IconList = styled.div`
  &::after {
    content: '';
    display: block;
    margin: 0 auto;
    margin-top: 8px;
    width: 70%;
    height: 2px;
    background-color: #3662A2;
  }
`;



const Name = styled.h2`
  margin: 10px 0 5px 0;
  font-size: 25px;
  color: #21487E;
`;

export default () => {
  return (
    <div className="user-container">
      <Avatar src="https://avatars3.githubusercontent.com/u/23211153?s=400&u=d51b9822ad0efab99740f2999222de455d7fe8f6&v=4"/>
      <Name>Guanine</Name>
      <p style={{color:"#2F3421", padding:'5px 0'}}>伪前端</p>
      <p style={{color:"#2F3421",  padding:'5px 0 10px'}}>今天也要加油鸭</p>
      <IconList>
      </IconList>
      <Links />
    </div>
  );
};