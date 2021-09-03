import { GRID, NUMBERS } from '../../typings'

interface IINPUT {
  grid: GRID
  row: number
  value: NUMBERS
}

/**
 *
 * @param param0 grid (9x9 sudoku box), row index and value
 * @returns boolean
 */
export const isInRow = ({ grid, row, value }: IINPUT): boolean => {
  return grid[row].includes(value)
}
