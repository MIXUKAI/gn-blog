import React from 'react';

import Tag from '../../HomeArchive/components/Tag';

const TagList = (props) => {
  const { tags } = props;
  return (
    <div style={{textAlign:'center'}}>
      {
        tags.map(item => 
          <Tag key={item}>{item}</Tag>
        )
      }
    </div>
  );
}

export default TagList;