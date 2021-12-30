import { LOG_IN } from './types'
import { IServiceAction } from './reducers/serviceReducer'

export const setLogin = (payload: boolean): IServiceAction => ({
    type: LOG_IN,
    payload,
})
