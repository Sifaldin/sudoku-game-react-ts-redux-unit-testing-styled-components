import { configureStore } from 'core'
import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { Card, Content, Grid, Title } from './components'

import { GlobalStyles } from './styles'
import theme from './styles/theme'

export const App: React.FC = () => {
  const store = configureStore()
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Provider store={store}>
          <Content data-cy="content">
            <Title data-cy="title">Sudoku</Title>
            <Card data-cy="card">
              <Grid />
            </Card>
          </Content>
        </Provider>
      </ThemeProvider>
    </>
  )
}
