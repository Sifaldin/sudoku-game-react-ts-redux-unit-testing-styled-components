import { isInCol } from '.'
import { GRID } from '../../typings'

describe('isInCol', () => {
  const grid: GRID = [
    [8, 4, 2, 6, 5, 1, 3, 9, 7],
    [5, 3, 7, 2, 8, 9, 6, 4, 1],
    [6, 9, 1, 7, 3, 4, 5, 2, 8],
    [1, 6, 3, 8, 4, 5, 9, 7, 2],
    [7, 5, 8, 1, 9, 2, 4, 6, 3],
    [0, 2, 4, 3, 7, 6, 1, 8, 5],
    [4, 7, 6, 5, 1, 8, 2, 3, 0],
    [2, 8, 5, 9, 6, 3, 7, 1, 4],
    [3, 1, 9, 3, 1, 7, 8, 5, 6],
  ]
  it('should return true when value exists in col', () => {
    expect(isInCol({ col: 0, grid, value: 4 })).toBeTruthy()
    expect(isInCol({ col: 2, grid, value: 6 })).toBeTruthy()
    expect(isInCol({ col: 8, grid, value: 3 })).toBeTruthy()
  })

  it('should return false when value doesnt exist ', () => {
    expect(isInCol({ col: 0, grid, value: 9 })).toBeFalsy()
  })
})
