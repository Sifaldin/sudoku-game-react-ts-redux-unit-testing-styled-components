import React from 'react'
import { BlockWrapper } from './styles'

interface Props {
  colIndex: number
  rowIndex: number
}

export const Block: React.FC<Props> = ({ colIndex, rowIndex }) => {
  return <BlockWrapper data-cy={`block ${rowIndex}--${colIndex}`} />
}
