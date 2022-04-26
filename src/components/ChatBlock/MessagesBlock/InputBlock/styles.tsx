import styled from 'styled-components'
import { TextField } from '@mui/material'

export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 10px;
    box-sizing: border-box;
`
export const AddBtn = styled.div`
    width: 50px;
`
export const Input = styled(TextField)`
    width: 100%;
    & .MuiOutlinedInput-root {
        & fieldset {
            border: none;
        }
    }
`
