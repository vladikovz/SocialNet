import * as S from './styles'
import React from 'react'
import { ChatCard } from './ChatCard/ChatCard'
import { TextField } from '@mui/material'

export const ChatBlock = () => {
    return (
        <S.Container>
            <TextField
                size={'small'}
                sx={{
                    color: 'black',
                    backgroundColor: '#b1b1f3',
                    borderRadius: '5px',
                }}
                fullWidth
                id="outlined-password-input"
                type="text"
                autoComplete="current-password"
                placeholder={'Search...'}
            />
            <ChatCard />
        </S.Container>
    )
}
