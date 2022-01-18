import React from 'react'
import { DialogTitle, styled } from '@mui/material'

interface ICreateDialogButtons {
    children: React.ReactNode
}
const SubmitButtonsLayoutStyled = styled(DialogTitle)`
    display: flex;
    justify-content: flex-end;
`

export const SubmitButtonsLayout = (props: ICreateDialogButtons) => {
    return (
        <SubmitButtonsLayoutStyled>{props.children}</SubmitButtonsLayoutStyled>
    )
}
