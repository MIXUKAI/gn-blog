import React from 'react';

import Top from './Top';

export default function BottomBar() {
  return (
    <div className="bottom-bar">
      <div className="bottom-bar-wrap" style={
          {maxWidth:960, margin:'0 auto', display:'flex', justifyContent: 'flex-end',
            padding:'0 10px'
          }}
      >
        <Top/>
      </div>
    </div>
  );
};
