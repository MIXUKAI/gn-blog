import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  margin: 15px 0;
  font-size: 28px;
  font-weight: 600;
  text-align: center;
`;

export default ({ children }) => {
  return (
    <Title>{ children }</Title>
  );
};