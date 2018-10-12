import React from 'react';
import styled from 'styled-components';
import avatarSrc from '../../../assets/images/avatar2.png';

import Icon from '../../../components/Icon';
import Avatar from './Avatar';
import Links from './Links';

const User = styled.div`
  width: 100%;
  text-align: center;
`;

const IconList = styled.ul`
  li {
    display: inline-block;
    margin: 5px;
  }
  &::after {
    content: '';
    display: block;
    margin: 0 auto;
    margin-top: 8px;
    width: 70%;
    height: 1px;
    background-color: #2c3e50;
  }
`;

const Name = styled.h2`
  margin: 10px 0 5px 0;
  font-size: 25px;
  color: #21487E;
`;

export default () => {
  return (
    <User>
      <Avatar src={avatarSrc} />
      <Name>Guanine</Name>
      <IconList>
        <li><Icon icon="icon-bokeblogger3" circle /></li>
        <li><Icon icon="icon-github" circle /></li>
        <li><Icon icon="icon-youxiang1" circle /></li>
      </IconList>
      <Links />
    </User>
  );
};