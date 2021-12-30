import React, { ChangeEvent, useState } from 'react'
import {
    Button,
    Dialog,
    DialogTitle,
    FormControl,
    Input,
    InputAdornment,
    InputLabel,
} from '@mui/material'
import { AccountCircle } from '@mui/icons-material'

interface IAuthDialogProps {
    title: string
    isOpen: boolean
    handleClose: () => void
    onSubmit: () => void
}

export const AuthDialog = (props: IAuthDialogProps) => {
    const [value, setValue] = useState('')

    const handleChange = (
        e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
        setValue(e.target.value)
    }
    return (
        <Dialog onClose={props.handleClose} open={props.isOpen}>
            <DialogTitle>{props.title}</DialogTitle>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                <InputLabel htmlFor="standard-adornment-amount">
                    Login
                </InputLabel>
                <Input
                    id="standard-adornment-amount"
                    value={value}
                    onChange={handleChange}
                    startAdornment={
                        <InputAdornment position="start">
                            <AccountCircle />
                        </InputAdornment>
                    }
                />
                <Button color={'secondary'} onClick={props.onSubmit}>
                    Submit
                </Button>
            </FormControl>
        </Dialog>
    )
}
