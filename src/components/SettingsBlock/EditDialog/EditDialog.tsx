import {
    Button,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    InputAdornment,
    OutlinedInput,
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import * as S from './styles'
import { Visibility, VisibilityOff } from '@mui/icons-material'

interface IEditDialogProps {
    password?: boolean
    title: string
    isOpen: boolean
    onClose: () => void
    value?: string
    submit: (newValue: string) => void
}
export const EditDialog = (props: IEditDialogProps) => {
    const [value, setValue] = useState<string>('')
    const [visible, setVisible] = useState<boolean>(false)

    useEffect(() => {
        setValue(props.value)
    }, [props])

    const handleSubmit = () => {
        props.submit(value)
    }

    const handleClickShowPassword = () => {
        setVisible((prevState) => !prevState)
    }

    return (
        <S.CustomDialog open={props.isOpen} onClose={props.onClose}>
            <DialogTitle>{props.title}</DialogTitle>
            <DialogContent>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={
                        props.password
                            ? visible
                                ? 'text'
                                : 'password'
                            : 'text'
                    }
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    endAdornment={
                        props.password ? (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    edge="end"
                                >
                                    {visible ? (
                                        <VisibilityOff />
                                    ) : (
                                        <Visibility />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        ) : undefined
                    }
                    label="Password"
                />
            </DialogContent>
            <DialogActions>
                <Button variant={'contained'} onClick={handleSubmit}>
                    Save
                </Button>
            </DialogActions>
        </S.CustomDialog>
    )
}
