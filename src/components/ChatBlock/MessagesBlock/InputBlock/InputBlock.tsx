import React from 'react'
import * as S from './styles'
import { IconButton, InputAdornment } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import AddIcon from '@mui/icons-material/Add'

export const InputBlock = () => {
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
                id="filled-start-adornment"
                placeholder={'type the message...'}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="send-btn"
                                onClick={() => null}
                                onMouseDown={() => null}
                                edge="end"
                            >
                                <SendIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
                size={'small'}
                variant="outlined"
            />
        </S.Container>
    )
}
