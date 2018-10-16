import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  display: inline-block;
  height: 25px;
  line-height: 20px;
  position: relative;
  font-size: 14px;
  margin: 10px 12px;
  padding: 3px 10px 3px 12px;
  background: #6fa3ef;
  color: #fff;
  text-decoration: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: -12px;
    width: 0;
    height: 0;
    border-color: transparent #6fa3ef transparent transparent;
    border-style: solid;
    border-width: 13px 12px 12px 0;
  }
  &:after {
    content: "";
    position: absolute;
    top: 11px;
    left: 0;
    width: 4px;
    height: 4px;
    border-radius: 2px;
    background: #fff;
    box-shadow: -1px -1px 2px #004977;
  }
  &:hover {
    background-color: #dcdcdc;
    color: #666;
    text-decoration: underline;
    &:before {
      border-right-color: #dcdcdc;
    }
  }
`

const Tag = (props) => {
  const { children } = props;
  return (
    <StyledLink 
      to={children === 'Show All' ? `/tags/` : `/tags/${children}`}
    >
      { children }
    </StyledLink>
  );
};

Tag.propTypes = {
  children: PropTypes.string.isRequired
}

export default Tag;