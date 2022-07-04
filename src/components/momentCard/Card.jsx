import React from "react";
import { Link } from 'react-router-dom';
import {
  BtButton,
  CtButtons,
  BtFav,
  CtCard,
  CtImage,
  CtInfo,
  CtText,
  Picture,
  TxtDescription,
  TxtTitle,
  TxtUser,
  Anchor,
} from "./Card.styled";

export function Card({moment, deleteMoment, editMoment}) {
  return (
    <CtCard>
      <CtImage>
        <BtFav><i className="fa-solid fa-gem"></i></BtFav>
        <Link to={`/moment/${moment.id}`}>
          <Picture src={moment.imgUrl} alt={moment.title}></Picture>  
        </Link>
      </CtImage>
      <CtInfo>
        <CtButtons>
          {/* <BtButton onClick={() => editMoment(moment)}><i className="fa-solid fa-pen-to-square"></i></BtButton> */}
          <BtButton /*onClick={() => editMoment(moment)}*/><Anchor href={`/form/${moment.id}`}><span><i className="fa-solid fa-pen-to-square"></i></span></Anchor></BtButton>
          <BtButton onClick={() => deleteMoment(moment)}><i className="fa-solid fa-trash"></i></BtButton>
        </CtButtons>
        <BtButton><i className="fa-regular fa-comments"></i></BtButton>
        <CtText>
          <TxtUser>{moment.user}</TxtUser>
          <TxtDescription>{moment.description}</TxtDescription>
          <TxtTitle>{moment.title}</TxtTitle>
        </CtText>
      </CtInfo>
    </CtCard>
  );
}

export default Card;


