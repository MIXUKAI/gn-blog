import React from 'react';
import styled from 'styled-components';
import User from './User';

const SideContainer = styled.aside`
  flex-basis: 25%;
`;

const Side = () => {
  return (
    <SideContainer>
      <User />
    </SideContainer>
  );
};
 
export default Side;