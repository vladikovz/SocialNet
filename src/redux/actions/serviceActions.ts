import { IServiceAction } from '../reducers/serviceReducer'
import { ServiceActionTypes } from '../types'

export const setLogin = (payload: boolean): IServiceAction => ({
    type: ServiceActionTypes.LOG_IN,
    payload,
})
