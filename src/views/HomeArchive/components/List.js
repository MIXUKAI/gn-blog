import React from 'react';
import PropTypes from 'prop-types';

import ListUl from './ListUl';
import groupDataByYear from '../../../utils/groupDataByYear';

class List extends React.Component {
  shouldComponentUpdate(prevProps) {
    return prevProps.data !== this.props.data;
  }

  render() {
    const formatedData = groupDataByYear(this.props.data);
    return (
      <div style={{margin: '15px 0'}}>
        {
          formatedData.map(item => {
            return <ListUl year={item.year} data={item.data} key={item.year} />
          })
        }
      </div>
    );
  }
}

List.propTypes = {
  data: PropTypes.array.isRequired
}

export default List;