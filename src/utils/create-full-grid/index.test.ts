import { createFullGrid } from '.'

describe('createFullGrid', () => {
  it('should return full sudoku grid 9x9 with values from 1-9', () => {
    const grid = createFullGrid()
    for (let row in grid)
      for (let col in grid[row]) {
        expect(grid[row][col]).toBeGreaterThanOrEqual(1)
        expect(grid[row][col]).toBeLessThanOrEqual(9)
      }
  })
})
