import { GRID, NUMBERS } from '../../typings'

interface COLINPUT {
  grid: GRID
  col: number
  value: NUMBERS
}

/**
 *
 * @param param0 grid (9x9 sudoku box), col index and value
 * @returns boolean
 */
export const isInCol = ({ grid, col, value }: COLINPUT): boolean => {
  for (let i = 0; i < 9; i++) {
    if (grid[i][col] === value) return true
  }

  return false
}
