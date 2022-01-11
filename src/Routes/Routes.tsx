import { Route } from 'react-router-dom'
import { ProfilePage } from '../pages/ProfilePage'
import React from 'react'
import { PostsPage } from '../pages/PostsPage'

export const RoutesList: JSX.Element[] = [
    <Route path="*" element={<ProfilePage />} />,
    <Route path="main" element={<></>} />,
    <Route path="posts" element={<PostsPage />} />,
    <Route path="photo" element={<div>Photo page</div>} />,
]
