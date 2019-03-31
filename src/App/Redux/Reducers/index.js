import { combineReducers } from 'redux'
import AppReducer from './Reducer/AppReducer'
import AuthReducer from './Reducer/AuthReducer'

export const rootReducers = combineReducers({
  main: AppReducer,
  auth: AuthReducer
})
