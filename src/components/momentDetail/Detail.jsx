import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { commentServices } from "../../services/commentService";
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
  const [moment, setMoment] = useState({ comment: [] });
  // const [comments, setComments] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getMomentById(id);
    // getCommentsByMomentId(id);
  }, [id]);

  const getMomentById = (id) => {
    momentServices.getMomentById(id).then((res) => {
      setMoment(res);
    });
  };

  // GET COMENTARIS D'UN MOMENT ID
  // const getCommentsByMomentId = (id) => {
  //   commentServices.getCommentsByMomentId(id).then((res) => {
  //     setComments(res);
  //   })
  // }


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
      {/* <CtComments>
        <TxtListComments>How about...</TxtListComments>
        {comments.map((comment, key) => (
          <TxtComments key={key} comment={comment}></TxtComments>
        ))}
      </CtComments> */}
    </CtDetail>
  );
}

export default Detail;
