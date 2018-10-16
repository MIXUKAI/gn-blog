import React from 'react';
import styled from 'styled-components';

import BottomBar from '../Article/components/BottomBar';
import Footer from '../../components/Footer';

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
      <Wrapper key="article-body">
        <div className="body">
          {children}
        </div>
      </Wrapper>,
      <Footer key="footer"/>,
      <BottomBar key="bottom-bar"/>
    ]
  );
};

export default Layout;