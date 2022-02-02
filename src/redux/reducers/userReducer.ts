import { UserActionType, UserActionTypes } from '../types'
import { testUser } from '../../constants/dataFilling'

export interface IUserAction {
    type: UserActionType
    payload: any
}

export interface IUserStore {
    login: string
    password: string
    email: string
    phone: string
}

const initialStore: IUserStore = testUser

export const userReducer = (store = initialStore, action: IUserAction) => {
    switch (action.type) {
        case UserActionTypes.SET_LOGIN:
            return { ...store, login: action.payload }
        case UserActionTypes.SET_PASSWORD:
            return { ...store, password: action.payload }
        case UserActionTypes.SET_PHONE:
            return { ...store, phone: action.payload }
        case UserActionTypes.SET_EMAIL:
            return { ...store, email: action.payload }
        default:
            return store
    }
}
