import React from 'react'
import { IconButton, Menu, MenuItem } from '@mui/material'
import Fade from '@mui/material/Fade'
import { AccountCircle } from '@mui/icons-material'
import { RatingStars } from '../RatingStars/RatingStars'
import * as S from './styles'
import { useNavigate } from 'react-router-dom'
import { ProfileTabs } from '../../constants/profileTabs'

interface IProfileMenu {
    onLogoutClick: () => void
}

export const ProfileMenu = (props: IProfileMenu) => {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl)
    const navigate = useNavigate()

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
        navigate(`/profile/${ProfileTabs.myAds}`)
    }
    const handleLogoutClick = () => {
        props.onLogoutClick()
        handleClose()
    }
    return (
        <div>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleClick}
                color="inherit"
            >
                <AccountCircle />
            </IconButton>
            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <S.BorderWrapper side={'bottom'}>
                    <RatingStars />
                </S.BorderWrapper>
                <MenuItem onClick={handleClose}>My ads</MenuItem>
                <MenuItem onClick={handleClose}>Favorite</MenuItem>
                <MenuItem onClick={handleClose}>Chat</MenuItem>
                <MenuItem onClick={handleClose}>Settings</MenuItem>
                <S.BorderWrapper side={'top'}>
                    <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
                </S.BorderWrapper>
            </Menu>
        </div>
    )
}
