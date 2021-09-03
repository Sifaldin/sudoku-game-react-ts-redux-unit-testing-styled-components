// you can add baseUrl: src to ts.cofig and you can then do imports
// this way (import {GRID} from 'typings')
import { GRID, NUMBERS } from '../../typings'
import { checkGrid } from '../check-grid'
import { isInCol } from '../col'
import { identifyWorkingSquare } from '../identify-square'
import { isInRow } from '../row'
import { shuffle } from '../shuffle'
import { isInSquare } from '../square'

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

/**
 * backtracking/recursive function that checks all possibilities
 * in a 9x9 sudoku grid
 * @param grid : ;
 */
/**
 * A backtracking/recursive function to check all the possible combinations of numbers a solution is found
 * @param grid  9X9 Sudoku Grid
 */
export function fillGrid(grid: GRID) {
  let row = 0
  let col = 0

  for (let i = 0; i < 81; i++) {
    row = Math.floor(i / 9)
    col = i % 9

    if (grid[row][col] === 0) {
      shuffle(numbers)

      for (let value of numbers) {
        if (!isInRow({ grid, row, value }))
          if (!isInCol({ col, grid, value })) {
            const square = identifyWorkingSquare({ col, grid, row })
            if (!isInSquare({ square, value })) {
              grid[row][col] = value
              if (checkGrid(grid)) return true
              else if (fillGrid(grid)) return true
            }
          }
      }

      break
    }
  }

  grid[row][col] = 0
}
