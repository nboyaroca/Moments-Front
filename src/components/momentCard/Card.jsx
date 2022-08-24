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
  NumComment,
  NumFav,
  Avatar,
  AvatarImg
} from "./Card.styled";

export function Card({ moment, deleteMoment, like, isLiked }) {
  // console.log(moment)
  return (
      <CtCard>
      <CtImage>
        <Link to={`/moment/${moment.id}`}>
          <Picture src={moment.imgUrl} alt={moment.title}></Picture>
        </Link>
      </CtImage>

      {moment.liked ? ( 
        <>
      <NumFav>{moment.likesCount}</NumFav>
      <BtFav onClick={() => like(moment.id)} isLiked={isLiked}>
        <i className="fa-solid fa-gem"/> 
      </BtFav>
      </>
      ) : (
        <>
      <NumFav>{moment.likesCount}</NumFav>
      <BtFav onClick={() => like(moment.id)}>
        <i className="fa-regular fa-gem"/>
      </BtFav>
      </>
      )}

      <Avatar><AvatarImg src={moment.publisher.avatar} alt={moment.publisher.userName}/></Avatar>
      <CtInfo>
        
        <CtText>
          <TxtDescription>{moment.description}</TxtDescription>
          <TxtTitle>{moment.title}</TxtTitle>
        </CtText>
        
        <CtButtons>

          <CtUser>
            {/* <BtButton><i className="fa-solid fa-user-astronaut"></i></BtButton> */}
            
            <TxtUser>{moment.publisher.userName}</TxtUser>
          </CtUser>

          <NumComment> {moment.commentsCount} </NumComment>
          <Anchor href={`/moment/${moment.id}`}><BtButton><i className="fa-regular fa-comments"></i></BtButton></Anchor>
          <Anchor href={`/form/${moment.id}`}><BtButton><span><i className="fa-solid fa-pen-to-square"></i></span></BtButton></Anchor>
          <BtButton onClick={() => deleteMoment(moment)}><i className="fa-regular fa-trash-can"></i></BtButton>
        
        </CtButtons>
      </CtInfo>
    </CtCard>
  );
}

export default Card;
