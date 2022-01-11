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
