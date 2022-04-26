import styled from 'styled-components'

export interface IParams__btnProps {
    visible: 'hidden' | 'visible'
}

export const Photo = styled.img`
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    object-fit: cover;
    border-radius: 10px;
    overflow: hidden;
`

export const Content = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    margin: 0 15px;
`

export const Params = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
`

export const Content__name = styled.h4`
    margin: 5px 0;
    width: 100%;
`

export const Content__item = styled.div`
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 400px;
`

export const Content__message = styled.div`
    color: #595959;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 400px;
`

export const Params__date = styled.div`
    color: #595959;
`

export const Params__Btn = styled.div<IParams__btnProps>`
    visibility: ${({ visible = 'hidden' }) => visible};
`

export const Container = styled.div`
    display: grid;
    grid-template-columns: 2fr 7fr 1fr;
    height: 150px;
    width: 100%;
    border-radius: 10px;
    padding: 10px;
    box-sizing: border-box;
    position: relative;

    &:hover {
        background-color: antiquewhite;
        & ${Params__Btn} {
            visibility: visible;
        }
    }
`

export const Avatar = styled.div`
    position: absolute;
`
