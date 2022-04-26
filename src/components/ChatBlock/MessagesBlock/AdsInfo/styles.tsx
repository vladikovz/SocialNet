import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: 80px 1fr;
    height: 100%;
    width: 100%;
    border-radius: 10px;
    padding: 7px;
    box-sizing: border-box;
    position: relative;
    cursor: default;
`

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
export const Content__FirstLine = styled.div`
    width: fit-content;
    display: flex;
    justify-content: flex-start;
    cursor: pointer;
`

export const Content__name = styled.h4`
    height: fit-content;
    margin: 3px 10px 3px 0;
`

export const Content__SecondLine = styled.div`
    width: fit-content;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 400px;
    cursor: pointer;
`

export const Params__date = styled.div`
    color: #595959;
    min-width: 100px;
    align-items: center;
`

export const Avatar = styled.div`
    position: absolute;
    cursor: pointer;
`
