import React from 'react';
import styled from 'styled-components';

const LinkToReact = styled.a`
  text-decoration: none;
  color: #61dafb;
`

const footerStyle = {
  width: '100%',
  backgroundColor: '#fff',
  overflow: 'hidden',
  paddingBottom: '30px'
}

const container = {
  maxWidth: '960px',
  margin: '0 auto',
  overflow: 'hidden'
}

const metaItem = {
  textAlign: 'center',
  padding: '30px 30px'
}

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div className="footer-container" style={container}>
        <div className="meta-item" style={metaItem}>
          <p>This Blog Build with <LinkToReact href="https://reactjs.org/">React 16.5.2</LinkToReact></p>
          <p>
            &copy;2018 | Guanine的个人博客
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer