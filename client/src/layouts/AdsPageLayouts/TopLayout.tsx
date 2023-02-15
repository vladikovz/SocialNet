import React from 'react'
import styled from 'styled-components'

interface IPhotoLayoutProps {
    children: React.ReactNode
}

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
`

export const TopLayout = (props: IPhotoLayoutProps) => {
    return <Container>{props.children}</Container>
}
