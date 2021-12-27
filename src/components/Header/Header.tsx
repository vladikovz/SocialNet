import React from 'react'
import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import { ProfileMenu } from '../ProfileMenu/ProfileMenu'
import { Navigation } from '../ProfileMenu/Navigation/Navigation'

export const Header = () => {
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
                        <ProfileMenu />
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}
