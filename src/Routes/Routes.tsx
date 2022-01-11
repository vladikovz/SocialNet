import { Route } from 'react-router-dom'
import { ProfilePage } from '../pages/ProfilePage'
import React from 'react'
import { PostsPage } from '../pages/PostsPage'
import { v4 as uuidv4 } from 'uuid'

export const RoutesList: JSX.Element[] = [
    <Route key={uuidv4()} path="*" element={<ProfilePage />} />,
    <Route key={uuidv4()} path="main" element={<></>} />,
    <Route key={uuidv4()} path="posts" element={<PostsPage />} />,
    <Route key={uuidv4()} path="photo" element={<div>Photo page</div>} />,
]
