import { Route } from 'react-router-dom'
import { ProfilePage } from '../pages/ProfilePage'
import React from 'react'
import { PostsPage } from '../pages/PostsPage'
import { v4 as uuidv4 } from 'uuid'
import { MainPage } from '../pages/MainPage'
import { AdsPage } from '../pages/AdsPage'

export const RoutesList: JSX.Element[] = [
    <Route key={uuidv4()} path="profile/:tab" element={<ProfilePage />} />,
    <Route key={uuidv4()} path="profile" element={<ProfilePage />} />,
    <Route key={uuidv4()} path="main" element={<MainPage />} />,
    <Route key={uuidv4()} path="posts" element={<PostsPage />} />,
    <Route key={uuidv4()} path="photo" element={<div>Photo page</div>} />,
    <Route key={uuidv4()} path="ads/:id" element={<AdsPage />} />,
]
