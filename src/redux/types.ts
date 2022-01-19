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

interface ILoginAction {
    type: ServiceActionTypes.LOG_IN
    payload: number
}

export type ServiceActionType =
    | ServiceActionTypes.LOG_IN
    | ServiceActionTypes.SET_INPUT

export type PostActionType =
    | PostActionTypes.ADD_POST
    | PostActionTypes.LIKE_POST
    | PostActionTypes.DISLIKE_POST
    | PostActionTypes.DELETE_POST

export type AdsActionType =
    | AdsActionTypes.ADD_ADS
    | AdsActionTypes.DELETE_ADS
    | AdsActionTypes.GET_ADS
