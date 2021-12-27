import { Route } from 'react-router-dom'
import { ProfilePage } from '../pages/ProfilePage'
import React from 'react'

export const RoutesList: JSX.Element[] = [
    <Route path="*" element={<ProfilePage />} />,
    <Route path="posts" element={<div>Posts page</div>} />,
    <Route path="photo" element={<div>Photo page</div>} />,
]
