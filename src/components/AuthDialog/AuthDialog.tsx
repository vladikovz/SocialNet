import React, { ChangeEvent, useState } from 'react'
import {
    Button,
    DialogTitle,
    FormControl,
    IconButton,
    InputAdornment,
    OutlinedInput,
} from '@mui/material'
import { AccountCircle, Visibility, VisibilityOff } from '@mui/icons-material'
import * as S from './styles'

interface IAuthDialogProps {
    title: string
    isOpen: boolean
    handleClose: () => void
    onSubmit: () => void
}

export const AuthDialog = (props: IAuthDialogProps) => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [visible, setVisible] = useState<boolean>(false)

    const handleLoginChange = (
        e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
        setLogin(e.target.value)
    }

    const handlePasswordChange = (
        e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
        setPassword(e.target.value)
    }

    const handleClickShowPassword = () => {
        setVisible((prevState) => !prevState)
    }

    return (
        <S.CustomDialog onClose={props.handleClose} open={props.isOpen}>
            <DialogTitle>{props.title}</DialogTitle>
            <FormControl fullWidth variant="standard">
                <p>Login</p>
                <OutlinedInput
                    id="login"
                    value={login}
                    onChange={handleLoginChange}
                    startAdornment={
                        <InputAdornment position="start">
                            <AccountCircle />
                        </InputAdornment>
                    }
                />
            </FormControl>
            <FormControl fullWidth variant="standard">
                <p>Password</p>
                <OutlinedInput
                    id="password"
                    value={password}
                    type={visible ? 'text' : 'password'}
                    onChange={handlePasswordChange}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                edge="end"
                            >
                                {visible ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
            <Button
                sx={{ margin: '10px' }}
                color={'secondary'}
                onClick={props.onSubmit}
            >
                Submit
            </Button>
        </S.CustomDialog>
    )
}
