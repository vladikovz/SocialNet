import React from 'react'
import { IAds } from '../../Interfaces/IAds'
import moment from 'moment'
import * as S from './styles'
interface IAdsCardProps {
    data: IAds
    onClick: () => void
}

export const AdsCard = (props: IAdsCardProps) => {
    const handleClick = () => {
        props.onClick()
    }
    return (
        <S.Container onClick={handleClick}>
            <S.MainInfo>
                <S.Title variant="h6">{props.data.data?.title ?? ''}</S.Title>
                <S.Info variant="h5">{props.data.data?.field ?? ''}</S.Info>
                <S.DateInfo>
                    {props.data.createDate
                        ? moment().calendar(props.data.createDate)
                        : ''}
                </S.DateInfo>
            </S.MainInfo>
            <S.PhotoWrapper>
                <S.Photo
                    component="img"
                    image={
                        props.data.data && props.data.data.photo
                            ? typeof props.data.data.photo === 'string'
                                ? props.data.data.photo.toString()
                                : typeof props.data.data.photo === 'object'
                                ? URL.createObjectURL(props.data.data.photo)
                                : ''
                            : ''
                    }
                    alt={props.data.data?.title ?? 'picture'}
                />
            </S.PhotoWrapper>
        </S.Container>
    )
}
