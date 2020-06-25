import React from 'react'
import styled from 'styled-components'
import Row from './Row'

const BoardWrapper = styled.div``

const Board = (props) => {
  return (
    <BoardWrapper>
      {props.currentBoard.map((arr, idx) => {
        return (
          <Row
            key={`${idx}`}
            arr={arr}
            toggleAliveState={props.toggleAliveState}
          />
        )
      })}
    </BoardWrapper>
  )
}

export default Board
