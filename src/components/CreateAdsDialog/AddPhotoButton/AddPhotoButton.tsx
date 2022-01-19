import React, { ChangeEvent, useRef, useState } from 'react'
import { Button, styled } from '@mui/material'
import { ImagePreviewStyled } from './ImagePreviewStyled'

interface IAddButtonProps {
    id: string
    type: string
    name: string
    handleChangeInput: (file: File) => void
    error: boolean
}

const AddButtonStyled = styled(Button)`
    color: black;
    width: 150px;
    height: 50px;
    :hover {
        background-color: #cccccc;
    }
`

const DelButtonStyled = styled(Button)`
    padding: 0;
    border-radius: unset;
    font-size: 12px;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #000000;
    color: #ffffff;
    opacity: 40%;
    :hover {
        background-color: #000000;
        opacity: 65%;
    }
`

export const AddPhotoButton = (props: IAddButtonProps) => {
    const [imagePreviewUrl, setImagePreviewUrl] = useState<string>('')
    const hiddenFileInput = useRef(null)

    const handleBtnClick = () => {
        hiddenFileInput.current.click()
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const reader = new FileReader()
        reader.onloadend = () => {
            setImagePreviewUrl(reader.result.toString())
        }
        reader.readAsDataURL(e.target.files[0])
        props.handleChangeInput(e.target.files[0])
    }

    const handleRemoveImg = () => {
        setImagePreviewUrl(null)
    }

    return !imagePreviewUrl ? (
        <>
            <AddButtonStyled
                sx={{ backgroundColor: props.error ? 'red' : 'aliceblue' }}
                onClick={handleBtnClick}
            >
                {props.name}
            </AddButtonStyled>
            <input
                id={props.id}
                type={props.type}
                style={{ display: 'none' }}
                ref={hiddenFileInput}
                onChange={handleInputChange}
            />
        </>
    ) : (
        <div style={{ position: 'relative', height: '50px' }}>
            <ImagePreviewStyled src={imagePreviewUrl} />
            <DelButtonStyled onClick={handleRemoveImg}>
                Click to remove
            </DelButtonStyled>
        </div>
    )
}
