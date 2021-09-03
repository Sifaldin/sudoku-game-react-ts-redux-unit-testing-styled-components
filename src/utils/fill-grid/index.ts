// you can add baseUrl: src to ts.cofig and you can then do imports
// this way (import {GRID} from 'typings')
import { GRID, NUMBERS } from '../../typings'
import { isInCol } from '../col'
import { isInRow } from '../row'
import { shuffle } from '../shuffle'

const gridExample: GRID = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
]

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

/**
 * backtracking/recursive function that checks all possibilities
 * in a 9x9 sudoku grid
 * @param grid : ;
 */
export const fillGrid = (grid: GRID) => {
  let row = 0
  let col = 0

  for (let i = 0; i < 81; i++) {
    row = Math.floor(i / 9)
    col = i % 9

    if (grid[row][col] === 0) {
      shuffle(numbers)

      for (let value of numbers) {
        //is it not in the grid row?
        if (!isInRow({ grid, row, value })) {
          // is it not in the grid col?
          if (!isInCol({ grid, col, value })) {
            // is it not in grid block
            // .. if this is the case
            grid[row][col] = value
          }
        }
      }

      break
    }

    grid[row][col] = 0
  }
}
