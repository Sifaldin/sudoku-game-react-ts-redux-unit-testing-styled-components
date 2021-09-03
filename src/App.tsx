import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Card, Content, Grid, Title } from './components'

import { GlobalStyles } from './styles'
import theme from './styles/theme'

export const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Content data-cy="content">
          <Title data-cy="title">Sudoku</Title>
          <Card data-cy="card">
            <Grid />
          </Card>
        </Content>
      </ThemeProvider>
    </>
  )
}
