import React from 'react'
import styled from 'styled-components'

interface ProfileLayoutProps {
    bio?: React.ReactNode
    tips?: React.ReactNode
    nav?: React.ReactNode
    cards?: React.ReactNode
}

const Container = styled.div`
    display: grid;
    grid-template-areas:
        'bio tips tips'
        'nav nav nav'
        'cards cards cards';
    grid-gap: 2vh;
    height: 100vh;
    grid-template-rows: 200px 50px 1fr;
    grid-template-columns: 300px 300px 1fr;
`

const Bio = styled.div`
    grid-area: bio;
`

const Tips = styled.div`
    grid-area: tips;
`

const Nav = styled.div`
    grid-area: nav;
`

const Cards = styled.div`
    grid-area: cards;
`

export const ProfileLayout = (props: ProfileLayoutProps) => {
    return (
        <Container>
            <Bio>{props.bio}</Bio>
            <Tips>{props.tips}</Tips>
            <Nav>{props.nav}</Nav>
            <Cards>{props.cards}</Cards>
        </Container>
    )
}
