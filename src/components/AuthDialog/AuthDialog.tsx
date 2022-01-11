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
        <Dialog
            onClose={props.handleClose}
            open={props.isOpen}
            sx={{
                '& .MuiFormControl-root': { width: '90%', margin: '0 auto' },
            }}
        >
            <DialogTitle>{props.title}</DialogTitle>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                <InputLabel htmlFor="login">Login</InputLabel>
                <Input
                    id="login"
                    value={value}
                    onChange={handleChange}
                    startAdornment={
                        <InputAdornment position="start">
                            <AccountCircle />
                        </InputAdornment>
                    }
                />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input id="password" value={value} onChange={handleChange} />
            </FormControl>
            <Button
                sx={{ margin: '10px' }}
                color={'secondary'}
                onClick={props.onSubmit}
            >
                Submit
            </Button>
        </Dialog>
    )
}
