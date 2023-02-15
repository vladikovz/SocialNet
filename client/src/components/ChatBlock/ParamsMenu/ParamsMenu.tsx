import React from 'react'
import { Menu, MenuItem } from '@mui/material'
import { v4 as uuid } from 'uuid'
import { IParamsMenuItem } from '../../../Interfaces/IParamsMenuItem'

interface IParamsMenuProps {
    isOpen: boolean
    onClose: () => void
    anchorEl: any
    items: IParamsMenuItem[]
}

export const ParamsMenu = (props: IParamsMenuProps) => {
    const { isOpen, onClose, anchorEl } = props
    return (
        <Menu
            open={isOpen}
            onClose={onClose}
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
        >
            {props.items.map((item) => (
                <MenuItem key={uuid()} onClick={item.onClick}>
                    {item.name}
                </MenuItem>
            ))}
        </Menu>
    )
}
