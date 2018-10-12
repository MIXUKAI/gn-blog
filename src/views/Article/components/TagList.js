import React, { Component } from 'react';

import Tag from './Tag';

class TagList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }

  generateList(arr) {
    return arr.map((item, index) => (
      <Tag key={index}>{ item }</Tag>
    ));
  }

  componentWillReceiveProps(nextPorps) {
    const tags = nextPorps.tags;
    this.setState({ list: this.generateList(tags)});
  }

  render() {
    return (
      <div>
        { this.state.list }
      </div>
    );
  }
}

export default TagList;