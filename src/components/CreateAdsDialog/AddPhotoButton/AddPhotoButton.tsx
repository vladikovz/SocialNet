import React, { ChangeEvent, useRef, useState } from 'react'
import * as S from './styles'

interface IAddButtonProps {
    id: string
    type: string
    name: string
    handleChangeInput: (file: File) => void
    error: boolean
}

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
            <S.AddButton onClick={handleBtnClick} isErrorStyle={props.error}>
                {props.name}
            </S.AddButton>
            <input
                id={props.id}
                type={props.type}
                style={{ display: 'none' }}
                ref={hiddenFileInput}
                onChange={handleInputChange}
            />
        </>
    ) : (
        <S.DelButtonWrapper>
            <S.ImagePreview src={imagePreviewUrl} />
            <S.DelButton onClick={handleRemoveImg}>Click to remove</S.DelButton>
        </S.DelButtonWrapper>
    )
}
