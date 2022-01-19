import { styled, TextField } from '@mui/material'
import React from 'react'

interface ITextFieldCard {
    onChange: (value: string) => void
}

const StyledTextField = styled(TextField)`
    background-color: #a7c583;
    width: 100%;

    .MuiOutlinedInput-input {
        color: black;
    }
    ,
    . MuiOutlinedInput-root {
        fieldset {
            border-color: #6d6d6e;
            color: black;
        }
    }
`

export const TextFieldCard = (props: ITextFieldCard) => {
    return (
        <StyledTextField
            onChange={(e) => props.onChange(e.target.value)}
            id="outlined-multiline-static"
            label="What's news"
            multiline
            rows={4}
            placeholder={'Write here'}
        />
    )
}
