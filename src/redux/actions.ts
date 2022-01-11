import { PostActionTypes, ServiceActionTypes } from './types'
import { IServiceAction } from './reducers/serviceReducer'
import { IPostAction } from './reducers/postReducer'

export const setLogin = (payload: boolean): IServiceAction => ({
    type: ServiceActionTypes.LOG_IN,
    payload,
})

export const addPost = (payload: {
    massage: string
    id: string
}): IPostAction => ({
    type: PostActionTypes.ADD_POST,
    payload,
})

export const deletePost = (payload: { id: string }): IPostAction => ({
    type: PostActionTypes.DELETE_POST,
    payload,
})

export const likePost = (payload: { id: string }): IPostAction => ({
    type: PostActionTypes.LIKE_POST,
    payload,
})

export const dislikePost = (payload: { id: string }): IPostAction => ({
    type: PostActionTypes.DISLIKE_POST,
    payload,
})
