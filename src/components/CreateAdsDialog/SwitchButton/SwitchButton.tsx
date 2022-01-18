import { Button, ButtonGroup } from '@mui/material'
import React, { useState } from 'react'

interface ISwitchButtonProps {
    getSex: (sex: 'male' | 'female' | '') => void
    error: boolean
}

export const SwitchButton = (props: ISwitchButtonProps) => {
    const [sex, setSex] = useState<'male' | 'female'>(null)
    const handleClick = (sexValue: 'male' | 'female') => {
        setSex(sexValue)
        props.getSex(sex)
    }
    return (
        <ButtonGroup size="small" variant="contained" sx={{ height: '50px' }}>
            <Button
                disabled={sex === 'male'}
                key="Male"
                onClick={() => handleClick('male')}
            >
                Male
            </Button>
            <Button
                disabled={sex === 'female'}
                key="Female"
                onClick={() => handleClick('female')}
            >
                Female
            </Button>
            {/*{props.error && <div>Select sex</div>}*/}
        </ButtonGroup>
    )
}
