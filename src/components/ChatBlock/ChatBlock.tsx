import * as S from './styles'
import React from 'react'
import { ChatCard } from './ChatCard/ChatCard'

export const ChatBlock = () => {
    return (
        <S.Container>
            <S.FilterBlock />
            <ChatCard />
        </S.Container>
    )
}
