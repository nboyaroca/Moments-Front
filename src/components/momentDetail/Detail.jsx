import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { momentServices } from "../../services/momentServices";
import {
  CtComments,
  CtDetail,
  CtInfo,
  CtMoment,
  ImgPicture,
  TxtDescription,
  TxtDetail,
  TxtTitle,
  TxtComments,
  TxtListComments,
} from "./detail.styled";

export function Detail() {
  const [moment, setMoment] = useState({ comments: [] });
  const { id } = useParams();

  useEffect(() => {
    getMomentById(id);
  }, [id]);

  const getMomentById = (id) => {
    momentServices.getMomentById(id).then((res) => {
      setMoment(res);
    });
  };

  return (
    <CtDetail>
      <CtMoment>
        <ImgPicture src={moment.imgUrl} alt={moment.title} />
      </CtMoment>
      <CtInfo>
        <TxtTitle>{moment.title}</TxtTitle>
        <TxtDescription>{moment.description}</TxtDescription>
        <TxtDetail>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima alias non ipsa, dolorem similique quia maxime necessitatibus laboriosam eius totam quidem. Blanditiis, fugiat? Ex distinctio error magnam? Sed, rem ipsam.</TxtDetail>
      </CtInfo>
      <CtComments>
        <TxtListComments>How about...</TxtListComments>
        {moment.comments.map((comment, key) => (
          <TxtComments key={key}>{comment.comment}</TxtComments>
        ))}
      </CtComments>
    </CtDetail>
  );
}

export default Detail;
