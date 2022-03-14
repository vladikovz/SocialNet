import React, { useState } from 'react'
import * as S from './styles'
import { IconButton, InputAdornment } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import AddIcon from '@mui/icons-material/Add'
import { IMessage } from '../../../../redux/reducers/chatReducer'
import { testUser } from '../../../../sampleData/dataFilling'

interface InputBlock {
    onSendMessage: (message: IMessage) => void
}

export const InputBlock = (props: InputBlock) => {
    const [inputValue, setInputValue] = useState<string>('')

    const handleInputValueChange = (
        e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
        setInputValue(e.target.value)
    }

    const handleSendBtnClick = () => {
        if (inputValue !== '') {
            const message: IMessage = {
                time: new Date(),
                message: inputValue,
                userId: testUser.id,
            }
            props.onSendMessage(message)
            setInputValue('')
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
