import React from 'react'
import styled from 'styled-components'

const PresetBoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-around;
`

const Sidebar = (props) => {
  return (
    <PresetBoardWrapper>
      <p>Game Settings</p>
      <div>
        <button onClick={() => props.randomBoard()}>Random Preset</button>
      </div>
      <div>
        <p>
          <small>Board Size</small>
        </p>
        <button
          onClick={() => {
            props.stopGame()
            props.boardResize(15)
          }}
        >
          15 X 15
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            props.stopGame()
            props.boardResize(25)
          }}
        >
          25 X 25
        </button>
      </div>
    </PresetBoardWrapper>
  )
}

export default Sidebar
