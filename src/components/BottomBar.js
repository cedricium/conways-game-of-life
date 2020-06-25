import React from 'react'
import styled from 'styled-components'

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const BottomBar = (props) => {
  return (
    <>
      <p>Game Settings</p>
      <ButtonWrapper>
        <button onClick={() => props.playGame()}>Play</button>
        <button onClick={() => props.clearBoard()}>Clear the Board</button>
        <button onClick={() => props.stopGame()}>Stop</button>
      </ButtonWrapper>
    </>
  )
}

export default BottomBar
