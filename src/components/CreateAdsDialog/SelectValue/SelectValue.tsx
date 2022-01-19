import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
} from '@mui/material'
import React, { useState } from 'react'

interface ISelectValueProps {
    id: string
    name: string
    items: string[]
    getValue: (value: string) => void
}

export const SelectValue = (props: ISelectValueProps) => {
    const [value, setValue] = useState('')
    const handleChange = (e: SelectChangeEvent) => {
        setValue(e.target.value)
        props.getValue(e.target.value)
    }
    return (
        <FormControl fullWidth>
            <InputLabel id="value">{props.name}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id={props.id}
                value={value}
                label="Age"
                onChange={handleChange}
            >
                {props.items.map((item, index) => (
                    <MenuItem key={index} value={item}>
                        {item}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}
