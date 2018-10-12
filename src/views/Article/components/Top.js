import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  position: fixed;
  right: 30px;
  bottom: 30px;
`;

var scrollToptimer = null;
function returnToTop() {
  scrollToptimer = requestAnimationFrame(function fn() {
    var top = document.body.scrollTop || document.documentElement.scrollTop;
    var speed = top / 10;
    if (document.body.scrollTop !== 0) {
      document.body.scrollTop -= speed;
    } else {
      document.documentElement.scrollTop -= speed;
    }
    if (top === 0) {
      cancelAnimationFrame(scrollToptimer);
    } else {
      requestAnimationFrame(fn);
    }
  }); 
}

export default () => {
  return (
    <Wrap>
      <i className="iconfont"
        style={{ fontSize: 80, color: 'rgb(44,139,188)', cursor: 'pointer', userSelect: 'none'}}
        onClick={returnToTop}>&#xe633;</i>
    </Wrap>
  );
}
