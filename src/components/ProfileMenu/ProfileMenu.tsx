import React from 'react'
import { IconButton, Menu, MenuItem } from '@mui/material'
import Fade from '@mui/material/Fade'
import { AccountCircle } from '@mui/icons-material'

interface IProfileMenu {
    onLogoutClick: () => void
}

export const ProfileMenu = (props: IProfileMenu) => {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl)
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
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
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
            </Menu>
        </div>
    )
}
