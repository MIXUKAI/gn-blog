import React from 'react';
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
    color: #61b2a7;
    &:hover {
      color: #5fa3ef;
    }
  }
`;

const Anchor = (props) => {
  const { content } = props;
  return (
    <div style={{ position: 'fixed',top: 180,display: 'inline-block',textAlign: 'left' }} >
      <ul style={{ borderLeft: '1px solid #ddd' }}>
        {
          content.map((item) => {
            const { id, body, tagName } = item;
            return (
              <Li className={ tagName === 'H2' ? 'h2-Li' : 'h3-li' } key={id}>
                <a href={`#${id}`}>{ body }</a>
              </Li>
            );
          })
        }
      </ul>
    </div>
  );
}


export default Anchor;