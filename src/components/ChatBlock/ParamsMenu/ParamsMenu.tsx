import React from 'react'
import { Menu, MenuItem } from '@mui/material'

interface IParamsMenuProps {
    isOpen: boolean
    onClose: () => void
    anchorEl: any
}

export const ParamsMenu = (props: IParamsMenuProps) => {
    const { isOpen, onClose, anchorEl } = props
    return (
        <Menu open={isOpen} onClose={onClose} anchorEl={anchorEl}>
            <MenuItem>Open Profile</MenuItem>
            <MenuItem>Block</MenuItem>
            <MenuItem>Delete</MenuItem>
        </Menu>
    )
}
