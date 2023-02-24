import React, { useEffect, useRef, useState } from 'react'
import * as S from './styles'
import { IconButton, InputAdornment } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import AddIcon from '@mui/icons-material/Add'
import { IMessage } from '../../../../redux/reducers/chatReducer'
import { v4 as uuid } from 'uuid'

interface InputBlock {
    onSendMessage: (message: IMessage) => void
    userName: string
}

export const InputBlock = (props: InputBlock) => {
    const [inputValue, setInputValue] = useState<string>('')
    const syncInputValue = useRef('')
    useEffect(() => {
        document.addEventListener('keydown', (e) => handleEnterPress(e))
        return () => {
            document.removeEventListener('keydown', (e) => handleEnterPress(e))
        }
    })

    const handleEnterPress = (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            handleSendBtnClick()
            event.preventDefault()
        }
    }

    const handleInputValueChange = (
        e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
        syncInputValue.current = e.target.value
        setInputValue(e.target.value)
    }

    const handleSendBtnClick = () => {
        if (syncInputValue.current !== '') {
            const message: IMessage = {
                time: new Date(),
                message: syncInputValue.current,
                recipient: props.userName,
                id: uuid(),
            }
            props.onSendMessage(message)
            setInputValue('')
            syncInputValue.current = ''
        }
    }

    return (
        <S.Container>
            <S.AddBtn>
                <IconButton
                    aria-label="add"
                    onClick={() => null}
                    onMouseDown={() => null}
                    edge="end"
                >
                    <AddIcon />
                </IconButton>
            </S.AddBtn>
            <S.Input
                value={inputValue}
                id="filled-start-adornment"
                placeholder={'Type the message...'}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="send-btn"
                                onClick={handleSendBtnClick}
                                edge="end"
                            >
                                <SendIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
                size={'small'}
                variant="outlined"
                onChange={handleInputValueChange}
            />
        </S.Container>
    )
}
