import styled from 'styled-components'
import { Dialog } from '@mui/material'

export const CustomDialog = styled(Dialog)`
    & .MuiDialog-paper {
        padding: 20px;
    }

    & .MuiFormControl-root {
        width: 90%;
        margin: 0 auto;
    }
`
