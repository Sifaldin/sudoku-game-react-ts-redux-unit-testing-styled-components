import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IReducer, selectBlock } from 'reducers'
import { AnyAction, Dispatch } from 'redux'
import { INDEX, N } from 'typings'
import { BlockWrapper } from './styles'

interface Props {
  colIndex: INDEX
  rowIndex: INDEX
}

interface IState {
  isActive: boolean
  value: N
  isPuzzle: boolean
}

export const Block: React.FC<Props> = ({ colIndex, rowIndex }) => {
  const state = useSelector<IReducer, IState>(
    ({ workingGrid, selectedBlock, challengeGrid }) => ({
      value: workingGrid ? workingGrid[rowIndex][colIndex] : 0,
      isActive: selectedBlock
        ? selectedBlock[0] === rowIndex && selectedBlock[1] === colIndex
        : false,

      isPuzzle:
        challengeGrid && challengeGrid[rowIndex][colIndex] !== 0 ? true : false,
    })
  )

  const dispatch = useDispatch<Dispatch<AnyAction>>()

  const handleClick = () => {
    dispatch(selectBlock([rowIndex, colIndex]))
  }

  return (
    <BlockWrapper
      data-cy={`block ${rowIndex}--${colIndex}`}
      onClick={handleClick}
      active={state.isActive}
      isPuzzle={state.isPuzzle}
    >
      {state.value === 0 ? '' : state.value}
    </BlockWrapper>
  )
}
