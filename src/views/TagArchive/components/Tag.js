import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  padding: 6px 11px;
  background-color: rgb(140,173,224);
  margin: 0 4px 6px 0;
  color: #fff;
  border-radius: 100px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    background-color: rgb(109,162,217);
  }
`

const Tag = (props) => {
  const { id, children } = props;
  return (
    <StyledLink 
      to={`/tags/${id}`}
      {...props}
    >
      { children }
    </StyledLink>
  );
};

Tag.defaultProps = {
  id: ''
}

export default Tag;