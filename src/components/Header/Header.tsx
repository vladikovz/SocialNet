import React, { useState } from 'react'
import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import { ProfileMenu } from '../ProfileMenu/ProfileMenu'
import { Navigation } from '../ProfileMenu/Navigation/Navigation'
import { AuthDialog } from '../AuthDialog/AuthDialog'
import { HeaderButton } from './HeaderButton/HeaderButton'
import { useTypedSelector } from '../../redux/hooks/useTypedSelector'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setLogin } from '../../redux/actions/serviceActions'
import styles from './styles.module.css'
import { CreateAdsDialog } from '../CreateAdsDialog/CreateAdsDialog'

export const Header = () => {
    const dispatch = useDispatch()
    const { login } = useTypedSelector((store) => store.serve)
    const [isLoginDialog, setIsLoginDialog] = useState(false)
    const [isCreateDialog, setIsCreateDialog] = useState(false)
    const navigate = useNavigate()

    const handleLoginBtnClick = () => {
        setIsLoginDialog(true)
    }
    const handleCreateBtnClick = () => {
        if (!login) {
            setIsLoginDialog(true)
        } else {
            setIsCreateDialog(true)
        }
    }

    const handleLoginDialogClose = () => {
        setIsLoginDialog(false)
    }
    const handleCreateDialogClose = () => {
        setIsCreateDialog(false)
    }

    const handleLoginSubmit = () => {
        dispatch(setLogin(true))
        handleLoginDialogClose()
    }
    const handleCreateSubmit = () => {
        handleCreateDialogClose()
    }

    const handleLogout = () => {
        dispatch(setLogin(false))
        navigate('main')
    }

    const handleLabelClick = () => {
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
                            sx={{ flexGrow: 1, cursor: 'pointer' }}
                            onClick={handleLabelClick}
                        >
                            TutorAds
                        </Typography>
                        <div className={styles.buttonWrapper}>
                            <HeaderButton
                                onClick={handleCreateBtnClick}
                                name={'Create ads'}
                            />
                        </div>
                        <Navigation login={login} />
                        {login ? (
                            <ProfileMenu onLogoutClick={handleLogout} />
                        ) : (
                            <HeaderButton
                                onClick={handleLoginBtnClick}
                                name={'Log In'}
                            />
                        )}
                    </Toolbar>
                </AppBar>
            </Box>
            <AuthDialog
                isOpen={isLoginDialog}
                handleClose={handleLoginDialogClose}
                title={'Log In'}
                onSubmit={handleLoginSubmit}
            />
            <CreateAdsDialog
                isOpen={isCreateDialog}
                handleClose={handleCreateDialogClose}
                title={'Create ads'}
                onSubmit={handleCreateSubmit}
            />
        </>
    )
}
