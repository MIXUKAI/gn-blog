import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Icon from '../../../components/Icon';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #111
`

export default () => (
  <ul className="link-list">
    <StyledLink to="/"><li><Icon icon="icon-home" />首页</li></StyledLink>
    <StyledLink to="/tags"><li><Icon icon="icon-fenlei-copy" />分类</li></StyledLink>
    <StyledLink to="/about"><li><Icon icon="icon-guanyuwomen" />关于</li></StyledLink>
    <StyledLink to="/admin"><li><Icon icon="icon-guanlizhongxin" />管理</li></StyledLink>
  </ul>
);