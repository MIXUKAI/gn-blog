import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';


import baseApiUrl from '../../../utils/api';
import MyButton from '../../../components/Button/Button';

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pagecount: 0
    }
  }
  
  next = () => { this.props.next(); }
  previous = () => { this.props.prev(); }

  fetchPageCount = () => {
    const url = `${baseApiUrl}/article/pagecount`;
    axios.get(url)
      .then(res => this.setState({pagecount: res.data}));
  }

  componentDidMount() { this.fetchPageCount(); }

  render() {
    return (
      <div style={this.props.style}>
        {
          this.props.page !== 1 &&
            <MyButton size="large" icon="icon-previous" onClick={this.previous}>prev</MyButton>
        }
        {
          this.props.page < this.state.pagecount &&
            <MyButton type="primary" size="large" icon="icon-next" onClick={this.next} style={{float: 'right'}}>next</MyButton>
        }
      </div>
    );
  }
};

Pagination.propTypes = {
  next: PropTypes.func.isRequired,
  previous: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired
}

export default Pagination;