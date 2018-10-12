import React from 'react';

import YearBlock from './YearBlock';
import groupDataByYear from '../../../utils/groupDataByYear';

function generateBlocks(data) {
  return data.map(block => {
    return <YearBlock year={block.year} data={block.data} key={block.year} />
  });
}

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blocks: []
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      const blockedData = groupDataByYear(this.props.data);
      this.setState({ blocks: generateBlocks(blockedData)});
    }
  }

  render() {
    return (
      <div style={{margin: '15px 0'}}>
        { this.state.blocks }
      </div>
    );
  }
}

export default List;