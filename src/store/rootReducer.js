import { combineReducers } from 'redux'
import {fReducer} from './reducers/flightsReducer'

export const rootReducer = combineReducers({
  flights: fReducer,
})