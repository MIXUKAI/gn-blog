import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  color: #61b2a7;
  font-weight: bold;
  :hover {
    border-bottom: 2px solid #61b2a7;
  }
`

export default class Header extends Component {
  render() {
    return (
      <nav className="header">
        <div>
          <ul className="nav-ul">
            <StyledLink to="/"><li>首页</li></StyledLink>
            <StyledLink to="/tags"><li>标签</li></StyledLink>
            <StyledLink to="/about"><li>关于</li></StyledLink>
          </ul>
        </div>
      </nav>
    )
  }
}
