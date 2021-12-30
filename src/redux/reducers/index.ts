import { combineReducers } from 'redux'
import { serviceReducer } from './serviceReducer'

export const rootReducer = combineReducers({
    serve: serviceReducer,
})

export type rootReducerType = ReturnType<typeof rootReducer>
