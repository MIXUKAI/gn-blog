import React from 'react';
import styled from 'styled-components';

const RainBow = styled.div`
  height: 4px;
  background-color: rgb(44,139,188);
  background: linear-gradient(to right, rgb(44,139,188), rgb(140,173,224));
`;

export default () => <RainBow />;