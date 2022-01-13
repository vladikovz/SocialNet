import React, { ChangeEvent, useState } from 'react'
import {
    Button,
    Dialog,
    DialogTitle,
    FormControl,
    Input,
    InputLabel,
} from '@mui/material'

interface ICreateAdsDialogProps {
    title: string
    isOpen: boolean
    handleClose: () => void
    onSubmit: () => void
}

export const CreateAdsDialog = (props: ICreateAdsDialogProps) => {
    const [value, setValue] = useState('')

    const handleChange = (
        e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
        setValue(e.target.value)
    }
    return (
        <Dialog
            // onClose={props.handleClose}
            open={props.isOpen}
            sx={{
                '& .MuiFormControl-root': { width: '90%', margin: '0 auto' },
            }}
        >
            <DialogTitle>{props.title}</DialogTitle>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                <InputLabel htmlFor="login">Login</InputLabel>
                <Input id="login" value={value} onChange={handleChange} />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input id="password" value={value} onChange={handleChange} />
            </FormControl>
            <div>
                <Button
                    sx={{ margin: '10px' }}
                    color={'secondary'}
                    onClick={props.onSubmit}
                >
                    Submit
                </Button>
                <Button
                    sx={{ margin: '10px' }}
                    color={'secondary'}
                    onClick={props.handleClose}
                >
                    Cancel
                </Button>
            </div>
        </Dialog>
    )
}
