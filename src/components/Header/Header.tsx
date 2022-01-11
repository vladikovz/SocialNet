import React, { useState } from 'react'
import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import { ProfileMenu } from '../ProfileMenu/ProfileMenu'
import { Navigation } from '../ProfileMenu/Navigation/Navigation'
import { AuthDialog } from '../AuthDialog/AuthDialog'
import { HeaderButton } from './HeaderButton/HeaderButton'
import { useTypedSelector } from '../../redux/hooks/useTypedSelector'
import { useDispatch } from 'react-redux'
import { setLogin } from '../../redux/actions'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
    const dispatch = useDispatch()
    const { login } = useTypedSelector((store) => store.serve)
    const [isDialog, setIsDialog] = useState(false)
    const navigate = useNavigate()

    const handleClick = () => {
        setIsDialog(true)
    }

    const handleClose = () => {
        setIsDialog(false)
    }

    const handleSubmit = () => {
        dispatch(setLogin(true))
        handleClose()
    }

    const handleLogout = () => {
        dispatch(setLogin(false))
        navigate('main')
    }
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" enableColorOnDark>
                    <Toolbar>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            TutorAds
                        </Typography>
                        <Navigation login={login} />
                        {login ? (
                            <ProfileMenu onLogoutClick={handleLogout} />
                        ) : (
                            <HeaderButton
                                onClick={handleClick}
                                name={'Log In'}
                            />
                        )}
                    </Toolbar>
                </AppBar>
            </Box>
            <AuthDialog
                isOpen={isDialog}
                handleClose={handleClose}
                title={'Log In'}
                onSubmit={handleSubmit}
            />
        </>
    )
}
