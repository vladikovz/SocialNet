import React from 'react'
import styled from 'styled-components'

interface IManageItemLayoutProps {
    children: React.ReactNode
}
const Container = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

export const ManageItemLayout = (props: IManageItemLayoutProps) => {
    return <Container>{props.children}</Container>
}
