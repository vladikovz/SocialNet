import React, { useState } from 'react'
import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import { ProfileMenu } from '../ProfileMenu/ProfileMenu'
import { Navigation } from '../ProfileMenu/Navigation/Navigation'
import { AuthDialog } from '../AuthDialog/AuthDialog'
import { HeaderButton } from './HeaderButton/HeaderButton'

export const Header = () => {
    const [login, setLogin] = useState(false)
    const [isDialog, setIsDialog] = useState(false)

    const handleClick = () => {
        setIsDialog(true)
    }

    const handleClose = () => {
        setIsDialog(false)
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
                            SocialNet
                        </Typography>
                        <Navigation />
                        {login ? (
                            <ProfileMenu />
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
            />
        </>
    )
}
