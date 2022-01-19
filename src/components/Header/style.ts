import { styled, Toolbar } from '@mui/material'

export const Container = styled(Toolbar)`
    display: flex;
    justify-content: space-between;
`

export const Label = styled('div')`
    font-size: 24px;
    font-weight: bold;
    width: 30%;
    cursor: pointer;
`

export const CenterBtn = styled('div')`
    width: 40%;
    display: flex;
    justify-content: center;
`

export const Navigation = styled('div')`
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
