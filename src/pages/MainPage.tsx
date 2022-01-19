import { MainAppLayout } from '../layouts/MainAppLayout/MainAppLayout'
import { Button, TextField } from '@mui/material'
import React from 'react'
import { useTypedSelector } from '../redux/hooks/useTypedSelector'
import { AdsCard } from '../components/AdsCard/AdsCard'
import { v4 as uuidv4 } from 'uuid'
import { useNavigate } from 'react-router-dom'

export const MainPage = () => {
    const { adsList } = useTypedSelector((store) => store.ads)
    const navigate = useNavigate()

    const handleAdsClick = (id: string) => {
        navigate(`/ads/${id}`)
    }
    return (
        <MainAppLayout>
            <TextField sx={{ backgroundColor: '#d9d9d9' }} variant="outlined" />
            <Button>Find</Button>
            {adsList.length ? (
                adsList.map((item) => (
                    <AdsCard
                        onClick={() => handleAdsClick(item.id)}
                        key={uuidv4()}
                        data={item}
                    />
                ))
            ) : (
                <></>
            )}
        </MainAppLayout>
    )
}
