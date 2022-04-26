import React from 'react'
import * as S from './styles'
import { RatingStars } from '../../RatingStars/RatingStars'
import { useTypedSelector } from '../../../redux/hooks/useTypedSelector'
import { UserAvatar } from '../../UserAvatar/UserAvatar'

export const BioBlock = () => {
    const { login } = useTypedSelector((store) => store.user)
    return (
        <S.Container>
            <S.Avatar>
                <UserAvatar name={'A S'} size={3} fontSize={25} />
            </S.Avatar>
            <S.Name>{login ?? 'noName'}</S.Name>
            <RatingStars />
        </S.Container>
    )
}
