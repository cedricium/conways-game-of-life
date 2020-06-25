import React from 'react'
import styled from 'styled-components'

export default function Header() {
  return (
    <HeaderWrapper>
      <h1>Conway's Game of Life</h1>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 33px;
  text-align: center;
  justify-content: center;
  margin-bottom: 1rem;
  padding: 1rem;
  color: #333333;
`
