import React from 'react'
import { Button, styled } from '@mui/material'

interface ISubmitButtonProps {
    name: string
    onClick: () => void
}

const CustomButton = styled(Button)(() => ({
    color: 'white',
    backgroundColor: '#565656',
    '&:hover': {
        backgroundColor: '#9d9d9d',
    },
    width: '150px',
}))

export const HeaderButton = (props: ISubmitButtonProps) => {
    return (
        <>
            <CustomButton onClick={props.onClick} variant="contained">
                {props.name}
            </CustomButton>
        </>
    )
}
