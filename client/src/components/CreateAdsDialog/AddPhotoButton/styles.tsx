import styled from 'styled-components'
import { Button } from '@mui/material'

type AddButtonProps = {
    isErrorStyle: boolean
}

export const AddButton = styled(Button)<AddButtonProps>`
    color: black;
    width: 150px;
    height: 50px;
    background-color: ${({ isErrorStyle }) =>
        isErrorStyle ? 'red' : 'aliceblue'};
    :hover {
        background-color: #cccccc;
    }
`

export const DelButton = styled(Button)`
    padding: 0;
    border-radius: unset;
    font-size: 12px;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #000000;
    color: #ffffff;
    opacity: 40%;
    :hover {
        background-color: #000000;
        opacity: 65%;
    }
`

export const ImagePreview = styled.img`
    width: 100px;
    height: 50px;
`

export const DelButtonWrapper = styled.div`
    position: relative;
    height: 50px;
`
