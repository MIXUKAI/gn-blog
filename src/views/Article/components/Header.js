import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.nav`
  height: 60px;
  background-color: rgba(255,255,255,9);
  box-shadow: 0 0 10px rgba(14,14,14,.26);
  padding: 8px 10px;
`

const StyledLink = styled(Link)`
  color: #337ab7;
  font-weight: bold;
  /* :hover {
    background-color: #337ab7;
    color: #eee;
  } */
`

export default class Header extends Component {
  render() {
    return (
      <StyledHeader className="header">
        <div>
          <ul className="nav-ul">
            <StyledLink to="/"><li>首页</li></StyledLink>
            <StyledLink to="/tags"><li>标签</li></StyledLink>
            <StyledLink to="/about"><li>关于</li></StyledLink>
          </ul>
        </div>
      </StyledHeader>
    )
  }
}
