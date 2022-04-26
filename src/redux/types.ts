export enum ServiceActionTypes {
    LOG_IN = 'LOG_IN',
    SET_INPUT = 'SET_INPUT',
}

export enum PostActionTypes {
    ADD_POST = 'ADD_POST',
    LIKE_POST = 'LIKE_POST',
    DISLIKE_POST = 'DISLIKE_POST',
    DELETE_POST = 'DELETE_POST',
}

export enum AdsActionTypes {
    ADD_ADS = 'ADD_ADS',
    DELETE_ADS = 'DELETE_ADS',
    GET_ADS = 'GET_ADS',
}

export enum UserActionTypes {
    SET_LOGIN = 'SET_LOGIN',
    SET_PASSWORD = 'SET_PASSWORD',
    SET_PHONE = 'SET_PHONE',
    SET_EMAIL = 'SET_EMAIL',
}

export enum ChatActionTypes {
    ADD_MESSAGE = 'ADD_MESSAGE',
    DEL_MESSAGE = 'DEL_MESSAGE',
}

interface ILoginAction {
    type: ServiceActionTypes.LOG_IN
    payload: number
}

export type ServiceActionType = ServiceActionTypes

export type PostActionType = PostActionTypes

export type AdsActionType = AdsActionTypes

export type UserActionType = UserActionTypes
export type ChatActionType = ChatActionTypes
