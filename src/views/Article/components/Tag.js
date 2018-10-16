import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Tag = styled(Link)`
  display: inline-block;
  height: 22px;
  line-height: 22px;
  position: relative;
  font-size: 14px;
  margin: 10px 12px;
  padding: 0 10px 0 12px;
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
    border-width: 11px 12px 11px 0;
  }
  &:after {
    content: "";
    position: absolute;
    top: 10px;
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

export default ({children}) => <Tag to={`/tags/${children}`}>{ children }</Tag>