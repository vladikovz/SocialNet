import { PostActionType, PostActionTypes } from '../types'
import { IPost } from '../../Interfaces/IPost'

export interface IPostAction {
    type: PostActionType
    payload?: any
}

interface IPostStore {
    posts: IPost[]
}

const initialStore: IPostStore = {
    posts: [],
}

export const postReducer = (store = initialStore, action: IPostAction) => {
    let posts = [...store.posts]
    switch (action.type) {
        case PostActionTypes.ADD_POST:
            posts.push(action.payload)
            return {
                ...store,
                posts,
            }
        case PostActionTypes.DELETE_POST:
            posts = posts.filter((post) => post.id !== action.payload.id)
            return { ...store, posts }
        case PostActionTypes.LIKE_POST:
            posts = posts.map((post: IPost) =>
                post.id === action.payload.id
                    ? {
                          ...post,
                          likesCount: post.likesCount ? post.likesCount + 1 : 1,
                      }
                    : post
            )
            return { ...store, posts }
        case PostActionTypes.DISLIKE_POST:
            posts = posts.map((post: IPost) =>
                post.id === action.payload.id
                    ? {
                          ...post,
                          likesCount:
                              post.likesCount > 1
                                  ? post.likesCount - 1
                                  : undefined,
                      }
                    : post
            )
            return { ...store, posts }
        default:
            return store
    }
}
