import styled from 'styled-components'
import { Tab, Tabs } from '@mui/material'

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 20px;
`

export const CustomTab = styled(Tab)`
    color: #595959;

    &:hover {
        color: #000000;
    }
`
export const CustomTabs = styled(Tabs)`
    & .MuiTabs-indicator {
        background-color: #000000;
    }
    & .Mui-selected {
        color: #000000;
    }
`
