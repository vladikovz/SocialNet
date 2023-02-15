import styled from 'styled-components'
import { Button } from '@mui/material'
import onFavorite from '../../../assets/img/onFavorite.png'
import favorite from '../../../assets/img/favorite.png'

type ContactButtonProps = {
    bg_color?: string
    bg_color_hover?: string
}

type FavoriteIconProps = {
    isFavorite: boolean
}

export const Container = styled.div`
    cursor: pointer;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const UserName = styled.div`
    font-size: 14px;
    color: #59cb94;
    font-weight: bold;
`

export const ContactButton = styled(Button)<ContactButtonProps>`
    width: 150px;
    background-color: #${({ bg_color }) => bg_color ?? '00aaff'};
    color: white;
    margin-bottom: 10px;

    &:hover {
        background-color: #${({ bg_color_hover }) => bg_color_hover ?? '0085c9'};
    }
`

export const FavoriteIcon = styled.div<FavoriteIconProps>`
    background: url(${({ isFavorite }) =>
        isFavorite ? onFavorite : favorite});
    width: 100%;
    height: 100%;
    background-size: cover;
    opacity: 0.7;

    &:hover {
        opacity: 1;
    }
`

export const IconWrapper = styled.div`
    margin: 10px;
    width: 40px;
    height: 40px;
    cursor: pointer;
`
