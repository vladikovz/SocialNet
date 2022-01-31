import { CardActionArea, CardMedia, styled, Typography } from '@mui/material'

export const Container = styled(CardActionArea)`
    width: 100%;
    height: 100%;
    margin: 10px 0;
    display: flex;
    background-color: #eeeeee;
    overflow: hidden;
`

export const MainInfo = styled('div')`
    padding: 10px;
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
`

export const Info = styled(Typography)`
    display: flex;
    justify-content: center;
` as typeof Typography

export const DateInfo = styled(Typography)`
    font-size: 12px;
` as typeof Typography

export const Title = styled(Typography)`` as typeof Typography

export const Photo = styled(CardMedia)`
    height: 100%;
` as typeof CardMedia

export const PhotoWrapper = styled('div')`
    width: 40%;
    height: 100%;
`
