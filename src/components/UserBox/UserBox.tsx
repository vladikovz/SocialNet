import { AccountCircle } from '@mui/icons-material'
import { Dialog, DialogTitle, IconButton, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import * as S from './styles'
import { ManageItemLayout } from '../../layouts/AdsPageLayouts/ManageItemLayout'
import { useNavigate } from 'react-router-dom'

export const UserBox = () => {
    const [isDialog, setIsDialog] = useState(false)
    const [isFavorite, setIsFavorite] = useState(false)
    const [isPhoneShow, setIsPhoneShow] = useState(false)
    const navigate = useNavigate()

    const handleContactClick = () => {
        setIsDialog(true)
    }

    const handlePhoneClick = () => {
        setIsPhoneShow(true)
    }

    const handleCloseDialog = () => {
        setIsDialog(false)
    }

    const handleProfileClick = () => {
        navigate('/profile')
    }

    const handleFavoriteClick = () => {
        setIsFavorite((prevState) => !prevState)
    }

    useEffect(() => {
        return setIsPhoneShow(false)
    }, [])

    return (
        <ManageItemLayout>
            <S.Container onClick={handleProfileClick}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <S.UserName>Vlad</S.UserName>
            </S.Container>
            <S.ContactButton
                bgColor={'4fcc02'}
                bgColorHover={'3d9f00'}
                onClick={handlePhoneClick}
            >
                {isPhoneShow ? '+79533221455' : '+7953...'}
            </S.ContactButton>
            <S.ContactButton
                bgColor={'00aaff'}
                bgColorHover={'0085c9'}
                onClick={handleContactClick}
            >
                Contact
            </S.ContactButton>
            <S.IconWrapper onClick={handleFavoriteClick}>
                <S.FavoriteIcon isFavorite={isFavorite} />
            </S.IconWrapper>
            <Dialog open={isDialog} onClose={handleCloseDialog}>
                <DialogTitle>Send a message</DialogTitle>
                <TextField fullWidth id="title" name="title" />
            </Dialog>
        </ManageItemLayout>
    )
}
