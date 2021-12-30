import React from 'react'
import { Button, styled } from '@mui/material'

interface ISubmitButtonProps {
    name: string
    onClick: () => void
}

export const HeaderButton = (props: ISubmitButtonProps) => {
    const CustomButton = styled(Button)(() => ({
        color: 'white',
        backgroundColor: '#565656',
        '&:hover': {
            backgroundColor: '#9d9d9d',
        },
    }))
    return (
        <>
            <CustomButton onClick={props.onClick} variant="contained">
                {props.name}
            </CustomButton>
        </>
    )
}
