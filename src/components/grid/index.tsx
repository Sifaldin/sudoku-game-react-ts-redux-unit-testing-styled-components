import { Children, FC, useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { createGrid } from 'reducers'
import { AnyAction, Dispatch } from 'redux'
import { Block } from './block'
import { Container, Row } from './styles'

export const Grid: FC = () => {
  const dispatch = useDispatch<Dispatch<AnyAction>>()
  const create = useCallback(() => dispatch(createGrid()), [dispatch])

  useEffect(() => {
    create()
  }, [create])
  return (
    <Container data-cy="grid-container">
      {Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          <Row data-cy="grid-row-container">
            {Children.toArray(
              [...Array(9)].map((_, colIndex) => (
                <Block colIndex={colIndex} rowIndex={rowIndex} />
              ))
            )}
          </Row>
        ))
      )}
    </Container>
  )
}
