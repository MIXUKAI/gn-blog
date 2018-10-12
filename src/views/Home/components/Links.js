import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Icon from '../../../components/Icon';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #111
`

const Links = styled.ul`
  padding: 0 20px;
  margin-top: 10px;
  width: 100%;
  li {
    padding: 10px 20px 10px 30px;
    text-align: left;
    width: 100%;
    a {
      display: block;
      width: 100%;
      color: #111;
      text-decoration: none;
    }
    i {
      margin-right: 20px;
    }
    &:hover {
      background-color: rgba(0,0,0,.1)
    }
  }
`;

export default () => (
  <Links className="link-list">
    <StyledLink to="/"><li><Icon icon="icon-home" />首页</li></StyledLink>
    <StyledLink to="/tags"><li><Icon icon="icon-fenlei-copy" />分类</li></StyledLink>
    <StyledLink to="/about"><li><Icon icon="icon-guanyuwomen" />关于</li></StyledLink>
    <StyledLink to="/admin"><li><Icon icon="icon-guanlizhongxin" />管理</li></StyledLink>
  </Links>
);