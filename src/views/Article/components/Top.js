import React from 'react';

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
    <i className="iconfont return-top" id="return-top"
      onClick={returnToTop}>&#xe633;</i>
  );
}
