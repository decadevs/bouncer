import React from 'react'
import Styled from 'styled-components'
const Card = ({imageUrl}) => (
    <CardCont>
        <img src={imageUrl.imageUrl} alt='different-views'/>
    </CardCont>
)
export default Card

const CardCont = Styled.div`
    img{
        display: block;
        max-width: 100%;
        max-height: 100%;

    }
`