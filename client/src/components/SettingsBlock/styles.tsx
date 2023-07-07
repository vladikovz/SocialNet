import styled from 'styled-components'
import { Button } from '@mui/material'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    margin: 10px 0;
`

export const Field = styled.div`
    border-bottom: 1px solid #eeeeee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 60px;
`

export const FieldName = styled.div`
    width: 120px;
    font-size: 22px;
    text-transform: capitalize;
`

export const FieldValue = styled.div`
    align-content: flex-start;
    width: 300px;
    font-size: 20px;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: pre;
`

export const EditButton = styled(Button)`
    width: 50px;
`
