import React from 'react';

import Tag from './Tag';

const TagContainer = (props) => {
  const { data } = props;
  return (
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
      <Tag>Show All</Tag>
      {
        data.map(item => 
          <Tag key={item} id={item}>{ item }</Tag>
        )
      }
    </div>
  );
}

export default TagContainer;