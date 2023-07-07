import * as S from './styles'
import React, { useState } from 'react'
import { ChatCard } from './ChatCard/ChatCard'
import { TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { MessagesBlock } from './MessagesBlock/MessagesBlock'
import { useTypedSelector } from '../../redux/hooks/useTypedSelector'

export const ChatBlock = () => {
    const [isChat, setIsChat] = useState<boolean>(false)
    const navigate = useNavigate()
    const { login } = useTypedSelector((store) => store.serve)

    const handleChatCardClick = () => {
        setIsChat(true)
    }
    const handleAvatarClick = () => {
        navigate(`/profile/my-ads`)
    }

    const handleCloseMessagesBlock = () => {
        setIsChat(false)
    }
    return (
        <S.Container>
            {isChat ? (
                <MessagesBlock
                    recipient={login === 'Vlad' ? 'Ivan' : 'Vlad'} //TODO add real users
                    onBtnBackClick={handleCloseMessagesBlock}
                />
            ) : (
                <>
                    <TextField
                        size={'small'}
                        sx={{
                            backgroundColor: '#565656',
                            borderRadius: '5px',
                        }}
                        fullWidth
                        id="search"
                        type="text"
                        placeholder={'Search...'}
                    />
                    {login === 'Vlad' ? (
                        <ChatCard
                            // recipient={'Ivan'}
                            onCardClick={handleChatCardClick}
                            onAvatarClick={handleAvatarClick}
                        />
                    ) : (
                        <ChatCard
                            // recipient={'Vlad'}
                            onCardClick={handleChatCardClick}
                            onAvatarClick={handleAvatarClick}
                        />
                    )}
                </>
            )}
        </S.Container>
    )
}
