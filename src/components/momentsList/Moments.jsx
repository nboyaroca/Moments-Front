import { useEffect, useState } from "react";
import React from "react";
import { createUuid } from "../../utils/createUuid";
import { Card } from "../momentCard/Card";
import { MomentForm } from "../forms/MomentForm";
import { CtCreate, CtMoments, BtCreate } from "./Moments.styled";
// import data from "../../assets/data/dbMoments.json"
import { momentServices } from "../../services/momentServices";


export function Moments() {

  const [moments, setMoments] = useState ([])

  useEffect(() => {
    getAllMoments();
  },[]);


  const getAllMoments = () => {
    momentServices.getAllMoments().then((res) => {
      setMoments(res);
    })
  };

  // const addMoment = (data) => {
  //   data.id = createUuid();
  //   momentServices.addMoment(data).then((res) => {
  //     setMoments([...moments, res])
  //   })
  // }

  const deleteMoment = (moment) => {
    let deleteConfirmed = window.confirm(`really delete ${moment.title}?`);
    if (!deleteConfirmed) return;

    momentServices.deleteMoment(parseInt(moment.id)).then((res) => {
      if (res) {
        getAllMoments()
      }
    })
  }
      // let filterMoments = moments.filter(item => item.id !==moment.id);
      // setMoments(filterMoments);



  return (
    <>
      
      <CtMoments>
        <MomentForm></MomentForm>
          <CtCreate>
          <BtCreate>CREATE</BtCreate>
          </CtCreate>     
          {moments.map((moment, key) => (
            <Card key={key} moment={moment}
            deleteMoment={deleteMoment}/>
          ))}
        
        
      </CtMoments>
    </>
  );
}

export default Moments;
