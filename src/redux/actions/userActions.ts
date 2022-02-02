import { UserActionTypes } from '../types'
import { IUserAction } from '../reducers/userReducer'

export const SetLogin = (payload: string): IUserAction => ({
    type: UserActionTypes.SET_LOGIN,
    payload,
})

export const SetPassword = (payload: string): IUserAction => ({
    type: UserActionTypes.SET_PASSWORD,
    payload,
})

export const SetPhone = (payload: string): IUserAction => ({
    type: UserActionTypes.SET_PHONE,
    payload,
})

export const SetEmail = (payload: string): IUserAction => ({
    type: UserActionTypes.SET_EMAIL,
    payload,
})
