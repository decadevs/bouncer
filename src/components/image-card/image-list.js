import React from 'react'
import Card from './image-card'

const ImageList = ({imageUrls}) => (
    imageUrls.map((imageUrl, index) => (
        <Card imageUrl={imageUrl} key={index} />
    ))
)

export default ImageList