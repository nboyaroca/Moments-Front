import { useEffect, useState } from "react";
import React from "react";
import { Card } from "../momentCard/Card";
import { CtMoments } from "./Moments.styled";
// import data from "../../assets/data/dbMoments.json"
import { momentServices } from "../../services/momentServices";

export function Moments() {
  const [moments, setMoments] = useState([]);

  useEffect(() => {
    getAllMoments();
  }, []);

  const getAllMoments = () => {
    momentServices.getAllMoments().then((res) => {
      setMoments(res);
    });
  };

  // FUNCIÓ PER ESBORRAR UN MOMENT BY ID
  const deleteMoment = (moment) => {
    let deleteConfirmed = window.confirm(`really delete ${moment.title}?`);
    if (!deleteConfirmed) return;
    momentServices.deleteMoment(parseInt(moment.id)).then((res) => {
      if (res) {
        getAllMoments();
      }
    });
  };
  //una altra versió per agafar els moments
  // let filterMoments = moments.filter(item => item.id !==moment.id);
  // setMoments(filterMoments);



  return (
    <>
      <CtMoments>
        {moments.map((moment, key) => (
          <Card key={key} moment={moment} deleteMoment={deleteMoment} />
        ))}
      </CtMoments>
    </>
  );
}

export default Moments;
