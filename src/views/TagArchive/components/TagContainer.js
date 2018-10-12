import React from 'react';

import Tag from './Tag';

const TagContainer = (props) => {
  const { data } = props;
  return (
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
      <Tag style={{backgroundColor: 'rgb(247,245,249)', color: 'rgb(44,139,188)'}}>Show All</Tag>
      {
        data.map(item => 
          <Tag key={item} id={item}>{ item }</Tag>
        )
      }
    </div>
  );
}

export default TagContainer;