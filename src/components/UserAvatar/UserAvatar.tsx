import React from 'react'
import { Avatar } from '@mui/material'
import { stringToColor } from '../../utils/stringToColor'

type IUserAvatarProps = {
    name: string
    sizeEm: number
    border?: 1 | 2 | 3
    hover?: boolean
}

function avatarProps(props: IUserAvatarProps) {
    return {
        sx: {
            fontSize: '1.25em',
            transition: 'all .05s',
            backgroundColor: stringToColor(props.name),
            width: `${props.sizeEm}em`,
            height: `${props.sizeEm}em`,
            marginBottom: 1,
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
