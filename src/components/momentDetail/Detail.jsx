import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { momentServices } from '../../services/momentServices';
import { CtDetail, CtInfo, CtMoment, ImgPicture, TxtDescription, TxtTitle } from './detail.styled'

export function Detail() {
  const [moment, setMoment] = useState({})
  const {id} = useParams();

  useEffect(() => {
    getMomentById(id);
  },[id])

  const getMomentById = (id) => {
    momentServices.getMomentById(id).then(res => {
        setMoment(res)
    })
  }
  
    return (
    <CtDetail>
      
        <CtMoment>
          <ImgPicture src={moment.imgUrl} alt={moment.title} />
        </CtMoment>
        <CtInfo>
          <TxtTitle>{moment.title}</TxtTitle>
          <TxtDescription>{moment.description}</TxtDescription>
        </CtInfo>
    </CtDetail>
  )
}

export default Detail