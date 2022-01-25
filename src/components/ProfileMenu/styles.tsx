import styled from 'styled-components'

type BorderWrapperProps = {
    side: 'top' | 'bottom'
}

export const BorderWrapper = styled.div<BorderWrapperProps>`
    ${({ side }) =>
        side === 'top'
            ? 'border-top: 1px solid #eee; margin-top: 10px'
            : 'border-bottom: 1px solid #eee; margin-bottom: 10px'}
`
