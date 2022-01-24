import React from 'react'
import { Button } from '@mui/material'
import { fetchAds } from '../redux/api/adsApi'
import { useDispatch } from 'react-redux'

export const ProfilePage = () => {
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(fetchAds())
    }
    return (
        <>
            <h1>This is my profile</h1>
            <Button onClick={handleClick}>Fetch</Button>
        </>
    )
}
