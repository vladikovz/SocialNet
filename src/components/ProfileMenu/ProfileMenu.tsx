import React from 'react'
import { Badge, IconButton, Menu, MenuItem } from '@mui/material'
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

    const handleItemClick = (path: ProfileTabs) => {
        setAnchorEl(null)
        navigate(`/profile/${path}`)
    }

    const handleLogoutClick = () => {
        props.onLogoutClick()
        setAnchorEl(null)
        navigate(`/main`)
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
                onClose={() => setAnchorEl(null)}
                TransitionComponent={Fade}
            >
                <S.BorderWrapper side={'bottom'}>
                    <RatingStars />
                </S.BorderWrapper>
                <MenuItem onClick={() => handleItemClick(ProfileTabs.myAds)}>
                    My ads
                </MenuItem>
                <MenuItem>Favorite</MenuItem>
                <MenuItem onClick={() => handleItemClick(ProfileTabs.chat)}>
                    <Badge color="secondary" badgeContent={99}>
                        Chat
                    </Badge>
                </MenuItem>
                <MenuItem onClick={() => handleItemClick(ProfileTabs.settings)}>
                    Settings
                </MenuItem>
                <S.BorderWrapper side={'top'}>
                    <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
                </S.BorderWrapper>
            </Menu>
        </div>
    )
}
