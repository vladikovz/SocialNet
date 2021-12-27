import React from 'react'
import {
    AppBar,
    Box,
    createTheme,
    ThemeProvider,
    Toolbar,
    Typography,
} from '@mui/material'
import { ProfileMenu } from '../components/ProfileMenu/ProfileMenu'

export const ProfilePage = () => {
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#342e2e',
            },
        },
    })
    return (
        <>
            <ThemeProvider theme={darkTheme}>
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
                            <ProfileMenu />
                        </Toolbar>
                    </AppBar>
                </Box>
            </ThemeProvider>
        </>
    )
}
