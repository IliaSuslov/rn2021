import { combineReducers } from 'redux'
import {fReducer} from './reducers/flightsReducer'
import {appReducer} from './reducers/appReducer'

export const rootReducer = combineReducers({
  flights: fReducer,
  app: appReducer
})