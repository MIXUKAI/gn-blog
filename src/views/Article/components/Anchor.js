import React, { Component } from 'react';
import styled from 'styled-components';

const Li = styled.li`
  padding: 5px 0;

  &::before {
    position: relative;
    top: 0;
    left: -4px;
    display: inline-block;
    width: 7px;
    height: 7px;
    content: '';
    border-radius: 50%;
    background-color: #6fa3ef;
  }
  a {
    margin-left: 8px;
    text-decoration: none;
    color: #666;
    &:hover {
      color: #5fa3ef;
    }
  }
`;

const style = {
  position: 'fixed',
  top: 180,
  // width: 200,
  display: 'inline-block',
  textAlign: 'left'
}

class Anchor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }

  generateList(arr) {
    return arr.map((item) => {
      const { id, body, tagName } = item;
      return (
        <Li className={ tagName === 'H2' ? 'h2-Li' : 'h3-li' } key={id}>
          <a href={'#'+id}>{ body }</a>
        </Li>
      );
    });
  }

  componentWillReceiveProps(nextPorps) {
    const result = this.generateList(nextPorps.content);
    this.setState({ list: result });
  }

  render() {
    return (
      <div style={style} >
        <ul style={{ borderLeft: '1px solid #ddd' }}>
          { this.state.list }
        </ul>
      </div>
    );
  }
}


export default Anchor;