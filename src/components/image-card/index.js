import React from 'react'
import ImageList from './image-list'

const ImageCard = ({imageUrls}) => (
    <div className='d-flex justify-content-around' data-testid='image-card'>
        <ImageList imageUrls={imageUrls} />
    </div>
)

export default ImageCard
ImageCard.defaultProps = {
    imageUrls:[
        {
            imageUrl: 'https://res.cloudinary.com/decagonbouncer/image/upload/v1579183235/bouncer-frontend/side-view-beat-solo_nbuw8j.webp'        
        },
        {
            imageUrl: 'https://res.cloudinary.com/decagonbouncer/image/upload/v1579183235/bouncer-frontend/beat-solo-partial-view_kkd1ga.webp'
        },
        {
            imageUrl: 'https://res.cloudinary.com/decagonbouncer/image/upload/v1579183235/bouncer-frontend/beat-solo-view_ayz1ye.webp'
        },
        {
            imageUrl: 'https://res.cloudinary.com/decagonbouncer/image/upload/v1579183119/bouncer-frontend/fold-beat-solo_b8hceq.webp'
        }
    ]
}




