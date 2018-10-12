import React, { Component } from 'react'
// import Style from './banner.css'
import styled from 'styled-components'

const Banner = styled.div`
  margin: -20px;
  margin-bottom: 20px;
  overflow: hidden;
  /* width: 100%; */
  height: 0;
  padding-bottom: 35%;
  background-color: darkblue;
`

const Bn = (props) => {
  return (
    <Banner />
  )
}

export default Bn