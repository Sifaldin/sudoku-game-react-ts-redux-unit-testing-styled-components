import { createStore } from 'redux'
import reducer from 'reducers'
import { devToolsEnhancer } from 'redux-devtools-extension'

export const configureStore = (initialState = {}) => {
  const store = createStore(reducer, initialState, devToolsEnhancer({}))
  return store
}
