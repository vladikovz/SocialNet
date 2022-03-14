import { combineReducers } from 'redux'
import { serviceReducer } from './serviceReducer'
import { postReducer } from './postReducer'
import { adsReducer } from './adsReducer'
import { userReducer } from './userReducer'
import { chatReducer } from './chatReducer'

export const rootReducer = combineReducers({
    serve: serviceReducer,
    posts: postReducer,
    ads: adsReducer,
    user: userReducer,
    chat: chatReducer,
})

export type rootReducerType = ReturnType<typeof rootReducer>
