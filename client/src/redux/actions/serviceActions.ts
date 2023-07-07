import { IServiceAction } from '../reducers/serviceReducer'
import { ServiceActionTypes } from '../types'

export const setServiceLogin = (payload: {
    isLogin: boolean
    login: string
}): IServiceAction => ({
    type: ServiceActionTypes.LOGIN,
    payload,
})
