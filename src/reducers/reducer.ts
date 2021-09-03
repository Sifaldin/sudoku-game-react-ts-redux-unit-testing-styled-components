import { IREDUCER } from './interfaces'
import { AnyAction } from 'redux'
import { createFullGrid } from 'utils'
import * as types from './types'

const initialState: IREDUCER = {}

export const reducer = (state = initialState, action: AnyAction): IREDUCER => {
  switch (action.type) {
    case types.CREATE_GRID:
      return { ...state, grid: createFullGrid() }

    case types.SELECT_BLOCK:
      return { ...state, selectedBlock: action.coords }

    default:
      return state
  }
}
