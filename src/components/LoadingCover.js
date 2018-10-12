import React from 'react';
import styled from 'styled-components';

import loading from '../assets/images/loading.gif';

const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255,255,255,.6);
`
const LodingWrap = styled.div`
  text-align: center;
  position: relative;
  top: 50%;
  transform: translateY(-60%);
`
const Cover = ({ show }) => {
  // TODO: 这里是用show控制display好呢还是这样好？
  return (
    show &&
      <Container>
        <LodingWrap>
          <img src={loading} alt="loding"/>
          <p style={{fontSize: 25, color: '#333'}}>玩命加载中</p>
        </LodingWrap>
      </Container>
  );
}

Cover.defaultProps = {
  show: false
};

export default Cover;