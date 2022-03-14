import React from 'react'
import * as S from './styles'
import moment from 'moment'
import { IMessage } from '../../../../redux/reducers/chatReducer'
import { testUser } from '../../../../sampleData/dataFilling'
import { UserAvatar } from '../../../UserAvatar/UserAvatar'

interface IMessageBlockProps {
    message: IMessage
}

export const MessageBlock = (props: IMessageBlockProps) => {
    const currentPerson: boolean = props.message.userId === testUser.id
    return currentPerson ? (
        <S.Container position={'right'}>
            <S.Text>
                {props.message.message}{' '}
                <S.Time>{moment(props.message.time).format('LT')}</S.Time>
            </S.Text>
        </S.Container>
    ) : (
        <S.Container position={'left'}>
            <S.Text>
                {props.message.message}
                <S.Time>{moment(props.message.time).format('LT')}</S.Time>
            </S.Text>
            <UserAvatar name={'S D'} size={2} fontSize={12} border={2} />
        </S.Container>
    )
}
