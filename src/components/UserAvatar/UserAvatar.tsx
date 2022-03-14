import React from 'react'
import { Avatar } from '@mui/material'
import { stringToColor } from '../../utils/stringToColor'

type IUserAvatarProps = {
    name: string
    size: number
    fontSize: number
    border?: 1 | 2 | 3
    hover?: boolean
}

function avatarProps(props: IUserAvatarProps) {
    return {
        sx: {
            fontSize: `${props.fontSize}px`,
            padding: '3px',
            transition: 'all .05s',
            backgroundColor: stringToColor(props.name),
            width: `${props.size}em`,
            height: `${props.size}em`,
            border: props.border ? `white solid ${props.border}px` : undefined,
            '&:hover': props.hover
                ? {
                      transition: 'all .1s',
                      fontSize: '1.5em',
                  }
                : undefined,
        },
        children: `${props.name.split(' ')[0][0] ?? ''}${
            props.name.split(' ')[1][0] ?? ''
        }`,
    }
}

export const UserAvatar = (props: IUserAvatarProps) => {
    return <Avatar {...avatarProps(props)} />
}
