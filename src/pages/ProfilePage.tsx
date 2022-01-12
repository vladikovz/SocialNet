import React, {useState} from 'react'
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
            <Button onClick={handleClick}>Fetch</Button>
        </>
    )
}
