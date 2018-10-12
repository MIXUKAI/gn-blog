import React from 'react';

import MyButton from '../../../components/Button/Button';

class Pagination extends React.Component {
  next = () => {
    this.props.next && this.props.next();
  }

  previous = () => {
    this.props.prev && this.props.prev();
  }

  render() {
    return (
      <div style={this.props.style}>
        {
          this.props.page !== 1 &&
            <MyButton size="large" icon="icon-previous" onClick={this.previous}>prev</MyButton>
        }
        <MyButton type="primary" size="large" icon="icon-next" onClick={this.next} style={{float: 'right'}}>next</MyButton>
      </div>
    );
  }
};

export default Pagination;