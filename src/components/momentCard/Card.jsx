import React from "react";
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

export function Card({moment}) {
  return (
    <CtCard>
      <CtImage>
        <Picture src={require(`../../assets/img/${moment.imgUrl}`)} />
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
          <BtButton><i className="fa-solid fa-trash"></i></BtButton>
        </CtButtons>
      </CtInfo>
    </CtCard>
  );
}

export default Card;
