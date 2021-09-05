import { BLOCK_COORDS, GRID } from 'typings'

export interface IREDUCER {
  challengeGrid?: GRID
  solvedGrid?: GRID
  workingGrid?: GRID
  selectedBlock?: BLOCK_COORDS
}
