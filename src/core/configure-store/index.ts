import { createStore } from 'redux'
import reducer from 'reducers'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { devToolsEnhancer } from 'redux-devtools-extension'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)
export const configureStore = (initialState = {}) => {
  const store = createStore(persistedReducer, devToolsEnhancer({}))
  const persistor = persistStore(store)

  return { store, persistor }
}
