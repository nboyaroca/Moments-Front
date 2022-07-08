import React from "react";
import { Link } from "react-router-dom";
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
  CtUser,
  Anchor,
} from "./Card.styled";

export function Card({ moment, deleteMoment, editMoment }) {
  return (
    <CtCard>
      <CtImage>
        <Link to={`/moment/${moment.id}`}>
          <Picture src={moment.imgUrl} alt={moment.title}></Picture>
        </Link>
      </CtImage>
      
      <BtFav>
        <i className="fa-solid fa-gem"></i>
      </BtFav>
      
      <CtInfo>
        
        <CtText>
          <TxtDescription>{moment.description}</TxtDescription>
          <TxtTitle>{moment.title}</TxtTitle>
        </CtText>
        
        <CtButtons>

          <CtUser>
            <BtButton><i className="fa-solid fa-user-astronaut"></i></BtButton>
            <TxtUser>{moment.user} Astronaut </TxtUser>
          </CtUser>

          <Anchor href={`/moment/${moment.id}`}><BtButton><i className="fa-regular fa-comments"></i></BtButton></Anchor>
          <Anchor href={`/form/${moment.id}`}><BtButton><span><i className="fa-solid fa-pen-to-square"></i></span></BtButton></Anchor>
          <BtButton onClick={() => deleteMoment(moment)}><i class="fa-regular fa-trash-can"></i></BtButton>
        
        </CtButtons>
      </CtInfo>
    </CtCard>
  );
}

export default Card;
