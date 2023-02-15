import React from 'react'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import { Container } from './styles'

interface IPhotoViewerProps {
    photo: string | File
}

export const PhotoViewer = (props: IPhotoViewerProps) => {
    const images = [
        {
            original:
                typeof props.photo === 'string'
                    ? props.photo
                    : URL.createObjectURL(props.photo),
            // thumbnail: require("./some.jpg"),
        },
    ]

    return (
        <Container>
            <ImageGallery items={images} showPlayButton={false} />
        </Container>
    )
}
