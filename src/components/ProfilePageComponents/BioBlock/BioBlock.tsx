import React from 'react'
import * as S from './styles'
import { RatingStars } from '../../RatingStars/RatingStars'
import { Avatar } from '@mui/material'

function stringToColor(string: string) {
    let hash = 0
    let i

    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash)
    }

    let color = '#'

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff
        color += `00${value.toString(16)}`.substr(-2)
    }

    return color
}

function avatarProps(name: string) {
    return {
        sx: {
            backgroundColor: stringToColor(name),
            width: '4em',
            height: '4em',
            marginBottom: 1,
        },
        children: `${name.split(' ')[0][0] ?? ''}${
            name.split(' ')[1][0] ?? ''
        }`,
    }
}

export const BioBlock = () => {
    return (
        <S.Container>
            <Avatar {...avatarProps('Vladislav ')} />
            <S.Name>Vladislav</S.Name>
            <RatingStars />
        </S.Container>
    )
}
