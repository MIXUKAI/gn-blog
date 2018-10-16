import React from 'react';
import PropTypes from 'prop-types';

import Tag from './Tag';

const TagContainer = (props) => {
  return (
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
      <Tag id="all">Show All</Tag>
      {
        props.data.map(item => 
          <Tag key={item}>{ item }</Tag>
        )
      }
    </div>
  );
}

TagContainer.propTypes = {
  data: PropTypes.array.isRequired
}

export default TagContainer;