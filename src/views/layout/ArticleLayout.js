import React from 'react';
import styled from 'styled-components';

import Header from '../Article/components/Header';

const Wrapper = styled.div`
  position: relative;
  margin: 40px auto;
  max-width: 920px;
  min-height: 840px;
  padding: 20px;
  overflow: hidden;
  background-color: rgba(255,255,255,1);
`;

const Layout = ({ children }) => {
  return (
    [
      <Header />,
      <Wrapper>
        <div className="body">
          {children}
        </div>
      </Wrapper>
    ]
  );
};

export default Layout;