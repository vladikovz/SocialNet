import { MainAppLayout } from '../layouts/MainAppLayout/MainAppLayout'
import { Button, TextField } from '@mui/material'
import React from 'react'

export const MainPage = () => {
    return (
        <MainAppLayout>
            <TextField sx={{ backgroundColor: '#d9d9d9' }} variant="outlined" />
            <Button>Find</Button>
        </MainAppLayout>
    )
}
