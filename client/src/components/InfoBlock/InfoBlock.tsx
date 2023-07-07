import React from 'react'
import * as S from './styles'
import { InfoItem } from '../InfoItem/InfoItem'
import { IAddsInitialValues } from '../../Interfaces/IAddsInitialValues'

interface IInfoLayoutProps {
    items: IAddsInitialValues
}

export const InfoBlock = (props: IInfoLayoutProps) => {
    const showItems = () => {
        return Object.entries(props.items).map(
            (item) =>
                item[0] !== 'photo' &&
                item[0] !== 'description' && (
                    <InfoItem key={item[0]} label={item[0]} value={item[1]} />
                )
        )
    }

    return (
        <S.Container>
            <S.Params>{showItems()}</S.Params>
            <S.Description>{props.items.description}</S.Description>
        </S.Container>
    )
}
