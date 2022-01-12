import { PostActionTypes } from '../types'
import { IPostAction } from '../reducers/postReducer'

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
