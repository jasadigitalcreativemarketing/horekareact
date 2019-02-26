import {combineReducers} from 'redux'
import AppReducer from './Reducer/AppReducer'

export const rootReducers = combineReducers({
  main: AppReducer
})