import styled from 'styled-components'

const SECOND_COLOR = '#595959'

type positionProps = {
    position: 'left' | 'right'
}

export const Container = styled.div<positionProps>`
    display: flex;
    flex-direction: ${({ position }) =>
        position === 'left' ? 'row-reverse' : undefined};
    justify-content: flex-end;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
    align-items: center;
`

export const Text = styled.div`
    width: fit-content;
    height: 100%;
    margin: 0 5px;
    padding: 10px;
    background-color: antiquewhite;
    display: flex;
    align-items: center;
    border-radius: 7px;
`

export const Time = styled.div`
    color: ${SECOND_COLOR};
    font-size: 10px;
    padding: 0 5px;
`
