import React from 'react'
import { Rating } from '@mui/material'
import * as S from './styles'

export const RatingStars = () => {
    const [value, setValue] = React.useState<number | null>(2)
    const [hover, setHover] = React.useState(-1)

    const labels: { [index: string]: string } = {
        0.5: '0,5',
        1: '1',
        1.5: '1,5',
        2: '2',
        2.5: '2,5',
        3: '3',
        3.5: '3,5',
        4: '4',
        4.5: '4,5',
        5: '5',
    }
    return (
        <S.Wrapper>
            <Rating
                // readOnly
                value={value}
                name="simple-controlled"
                precision={0.5}
                onChange={(event, newValue) => {
                    setValue(newValue)
                }}
                onChangeActive={(event, newHover) => {
                    setHover(newHover)
                }}
            />
            {value !== null && (
                <S.Value>{labels[hover !== -1 ? hover : value]}</S.Value>
            )}
        </S.Wrapper>
    )
}
