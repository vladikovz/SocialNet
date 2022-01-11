import { combineReducers } from 'redux'
import { serviceReducer } from './serviceReducer'
import { postReducer } from './postReducer'

export const rootReducer = combineReducers({
    serve: serviceReducer,
    posts: postReducer,
})

export type rootReducerType = ReturnType<typeof rootReducer>
