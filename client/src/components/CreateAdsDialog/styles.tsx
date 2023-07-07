import { styled, TextField } from '@mui/material'

type widthT = {
    width?: string
}

export const CustomTextField = styled(TextField)<widthT>`
    .MuiInputLabel-shrink {
        color: ${(props) => props.width};
    }
`
