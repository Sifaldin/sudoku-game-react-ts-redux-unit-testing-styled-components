import { configureStore } from 'core'
import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { Card, Content, Grid, Title, Numbers, NewButton } from './components'
import { PersistGate } from 'redux-persist/integration/react'
import { GlobalStyles } from './styles'
import theme from './styles/theme'

export const App: React.FC = () => {
  const { store, persistor } = configureStore()
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Content data-cy="content">
              <Title data-cy="title">Sudoku</Title>
              <Card data-cy="card">
                <NewButton />
                <Grid />
                <Numbers />
              </Card>
            </Content>
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </>
  )
}
