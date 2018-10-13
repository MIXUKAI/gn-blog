import React from 'react';

import Tag from './Tag';

const TagList = (props) => {
  const { tags } = props;
  return (
    <div>
      {
        tags.map(item => 
          <Tag key={item}>{item}</Tag>
        )
      }
    </div>
  );
}

export default TagList;