import { combineReducers } from 'redux'
import { serviceReducer } from './serviceReducer'
import { postReducer } from './postReducer'
import { adsReducer } from './adsReducer'

export const rootReducer = combineReducers({
    serve: serviceReducer,
    posts: postReducer,
    ads: adsReducer,
})

export type rootReducerType = ReturnType<typeof rootReducer>
