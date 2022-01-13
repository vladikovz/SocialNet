import React, { useState } from 'react'
import { MainAppLayout } from '../layouts/MainAppLayout/MainAppLayout'
import { TextFieldCard } from '../components/TextFieldCard/TextFieldCard'
import { Button } from '@mui/material'
import { PostCard } from '../components/PostCard/PostCard'
import { useDispatch } from 'react-redux'
import { addPost, deletePost, dislikePost, likePost } from '../redux/actions'
import { useTypedSelector } from '../redux/hooks/useTypedSelector'
import { v4 as uuidv4 } from 'uuid'

export const PostsPage = () => {
    const [postInputValue, setPostInputValue] = useState<string>('')
    const dispatch = useDispatch()
    const { posts } = useTypedSelector((store) => {
        return {
            ...store.serve,
            ...store.posts,
        }
    })
    const onChangeInputValue = (value: string) => {
        setPostInputValue(value)
    }

    const handleAddPost = () => {
        dispatch(addPost({ massage: postInputValue, id: uuidv4() }))
    }

    const handleLikePost = (id: string) => {
        dispatch(likePost({ id }))
    }
    const handleDislikePost = (id: string) => {
        dispatch(dislikePost({ id }))
    }
    const handleDeletePost = (id: string) => {
        dispatch(deletePost({ id }))
    }

    return (
        <MainAppLayout>
            <TextFieldCard onChange={onChangeInputValue} />
            <Button onClick={handleAddPost}>Add</Button>
            {posts.length ? (
                posts.map((post) => (
                    <PostCard
                        key={post.id}
                        onLike={handleLikePost}
                        onDislike={handleDislikePost}
                        onDelete={handleDeletePost}
                        post={post}
                    />
                ))
            ) : (
                <></>
            )}
        </MainAppLayout>
    )
}
