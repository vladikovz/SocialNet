import React from 'react'
import 'react-image-gallery/styles/css/image-gallery.css'
import { Container } from './styles'
import * as S from './styles'

interface IInfoItemProps {
    label: string
    value: string
}

export const InfoItem = (props: IInfoItemProps) => {
    return (
        <Container>
            <S.Label>{props.label}:</S.Label>
            <S.Value>{props.value}</S.Value>
        </Container>
    )
}
