import React from 'react';
import styled from 'styled-components';

import './home.css';
import Footer from '../../components/Footer';

const Wrapper = styled.div`
  display: flex;
  position: relative;
  margin: 0 auto;
  max-width: 960px;
  min-height: 840px;
  padding: 30px 20px 20px 20px;
  overflow: hidden;
  background-color: rgba(255,255,255,1);
  box-shadow: 1px 1px 15px rgba(67,38,100,0.05);
`;

const Layout = ({ children }) => {
  return (
    [ // TODO: 为什么这里一定要添加key
      <div style={{ padding: '40px 0', backgroundColor: '#F6F9FC' }} key='home-container'>
        <Wrapper>
          {children}
        </Wrapper>
      </div>
      ,
      <Footer key="footer" />
    ]
  );
};

export default Layout;