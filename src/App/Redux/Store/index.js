import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { persistReducer, persistStore } from 'redux-persist'
import { rootReducers } from '../Reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import storage from 'redux-persist/lib/storage'
export const configureStore = () => {
  let persistConfig = {
    key: 'root',
    storage,
    whiteList: ['auth.companyID']
  }

  let persistReducers = persistReducer(persistConfig, rootReducers)

  let store = createStore(
    persistReducers,
    {},
    composeWithDevTools(applyMiddleware(thunk))
  )
  let persistStor = persistStore(store)
  return { store, persistStor }
}
