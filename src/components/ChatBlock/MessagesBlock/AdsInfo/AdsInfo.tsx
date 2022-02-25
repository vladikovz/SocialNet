import React from 'react'
import * as S from './styles'
import { UserAvatar } from '../../../UserAvatar/UserAvatar'
import moment from 'moment'
const ImgUrl =
    'https://cdn.pixabay.com/photo/2016/10/12/02/27/denali-national-park-1733313_1280.jpg'

interface IChatCardProps {
    onCardClick: () => void
    onAvatarClick: () => void
}

export const AdsInfo = (props: IChatCardProps) => {
    const handleAvatarClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
        props.onAvatarClick()
    }

    const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
        props.onCardClick()
        e.stopPropagation()
    }
    return (
        <S.Container onClick={handleCardClick}>
            <S.Avatar onClick={(e) => handleAvatarClick(e)}>
                <UserAvatar name={'V S'} sizeEm={1.5} border={2} />
            </S.Avatar>
            <S.Photo src={ImgUrl} alt={'Ads picture'} />
            <S.Content>
                <S.Content__FirstLine>
                    <S.Content__name>Ivan</S.Content__name>
                    <S.Params__date>
                        {moment(new Date()).format('MMM DD')}
                    </S.Params__date>
                </S.Content__FirstLine>
                <S.Content__SecondLine>Product manager</S.Content__SecondLine>
            </S.Content>
        </S.Container>
    )
}
