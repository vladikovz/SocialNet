import React from 'react'
import { DialogTitle, styled } from '@mui/material'

interface ICreateDialogTitle {
    children: React.ReactNode
}

const DialogTitleLayoutStyled = styled(DialogTitle)`
    text-align: center;
`

export const DialogTitleLayout = (props: ICreateDialogTitle) => {
    return <DialogTitleLayoutStyled>{props.children}</DialogTitleLayoutStyled>
}
