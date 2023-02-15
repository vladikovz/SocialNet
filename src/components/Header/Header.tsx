import React, { useState } from 'react'
import { AppBar } from '@mui/material'
import { ProfileMenu } from '../ProfileMenu/ProfileMenu'
import { Navigation } from '../Navigation/Navigation'
import { AuthDialog } from '../AuthDialog/AuthDialog'
import { useTypedSelector } from '../../redux/hooks/useTypedSelector'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setServiceLogin } from '../../redux/actions/serviceActions'
import { CreateAdsDialog } from '../CreateAdsDialog/CreateAdsDialog'
import * as S from './style'
import { SetLogin } from '../../redux/actions/userActions'

export const Header = () => {
    const dispatch = useDispatch()
    const { isLogin } = useTypedSelector((store) => store.serve)
    const [isLoginDialog, setIsLoginDialog] = useState(false)
    const [isCreateDialog, setIsCreateDialog] = useState(false)
    const navigate = useNavigate()

    const handleLoginBtnClick = () => {
        setIsLoginDialog(true)
    }
    const handleCreateBtnClick = () => {
        if (!isLogin) {
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

    const handleLoginSubmit = (login: string) => {
        dispatch(setServiceLogin({ isLogin: true, login }))
        dispatch(SetLogin(login))
        handleLoginDialogClose()
    }
    const handleCreateSubmit = () => {
        handleCreateDialogClose()
    }

    const handleLogout = () => {
        dispatch(setServiceLogin({ isLogin: false, login: '' }))
        dispatch(SetLogin(''))
        navigate('main')
    }

    const handleLabelClick = () => {
        navigate('main')
    }

    return (
        <>
            <AppBar position="static" enableColorOnDark>
                <S.Container>
                    <S.Label onClick={handleLabelClick}>TutorAds</S.Label>
                    <S.CenterBtn>
                        <S.HeaderButton onClick={handleCreateBtnClick}>
                            Create ads
                        </S.HeaderButton>
                    </S.CenterBtn>
                    <S.Navigation>
                        <Navigation login={isLogin} />
                        {isLogin ? (
                            <ProfileMenu onLogoutClick={handleLogout} />
                        ) : (
                            <S.HeaderButton onClick={handleLoginBtnClick}>
                                Log In
                            </S.HeaderButton>
                        )}
                    </S.Navigation>
                </S.Container>
            </AppBar>

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
