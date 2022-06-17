import React from 'react'
import image from '../assets/img/London.jpg';
import { CtCard, CtImage, CtInfo, Picture, TxtTitle } from './Card.styled'

export function Card() {
  
    return (
    <CtCard>
      <CtImage>
        <Picture src={image} />
      </CtImage>
      <CtInfo>
        <TxtTitle>City</TxtTitle>
      </CtInfo>
    </CtCard>
        
  )
}

export default Card