import React from 'react'
import styled from 'styled-components'

interface IFormCreateLayoutProps {
    children?: React.ReactNode
}

const FormLayoutWrap = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2vw;
    padding: 30px;
    justify-items: center;
`

export const CreateAdsFormLayout = (props: IFormCreateLayoutProps) => {
    return <FormLayoutWrap>{props.children}</FormLayoutWrap>
}
