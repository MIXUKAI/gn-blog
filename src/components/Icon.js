import React from 'react'
import styled, { css } from 'styled-components'
import classNames from 'classnames'

const Icon = styled.i`
  ${props => props.circle && css`
    padding: 6px;
    border-radius: 50%;
    background-color: #2c3e50;
    &::before {
      color: #fff;
    }
  `}
`

export default ({ icon, circle }) => {
  return (
    <Icon className={classNames('iconfont', icon)} circle={circle}></Icon>
  )
}
