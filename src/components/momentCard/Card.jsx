import React from "react";
import { Link } from 'react-router-dom';
import {
  BtButton,
  CtButtons,
  CtCard,
  CtImage,
  CtInfo,
  CtText,
  Picture,
  TxtDescription,
  TxtTitle,
  TxtUser,
} from "./Card.styled";

export function Card({moment, deleteMoment}) {
  return (
    <CtCard>
      <CtImage>
        <Link to={`/moment/${moment.id}`}>
          <Picture src={moment.imgUrl} alt={moment.title} />
        </Link>
      </CtImage>
      <CtInfo>
        <CtText>
          <TxtUser>{moment.user}</TxtUser>
          <TxtTitle>{moment.title}</TxtTitle>
          <TxtDescription>{moment.description}</TxtDescription>
        </CtText>
        <CtButtons>
          <BtButton><i className="fa-solid fa-eye"></i></BtButton>
          <BtButton><i className="fa-solid fa-gem"></i></BtButton>
          <BtButton><i className="fa-solid fa-pen-to-square"></i></BtButton>
          <BtButton onClick={() => deleteMoment(moment)}><i className="fa-solid fa-trash"></i></BtButton>
        </CtButtons>
      </CtInfo>
    </CtCard>
  );
}

export default Card;
