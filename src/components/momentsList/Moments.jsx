import { useEffect, useState } from "react";
import React from "react";
import { Card } from "../momentCard/Card";
import { CtMoments, CtSearch } from "./Moments.styled";
// import data from "../../assets/data/dbMoments.json"
import { momentServices } from "../../services/momentServices";
import Search from "../search/Search"; //per importar per default no curly brakets

export function Moments() {
  const [moments, setMoments] = useState([]);
  // const [momentToEdit, setMomentToEdit] = useState();
  // const [isEditMode, setIsEditMode] = useState(false);

  const [search, setSearch] = useState("");

  useEffect(() => {
    search === "" ? getAllMoments() : getBySearch(search);
  }, [search, moments]);

  const getAllMoments = () => {
    momentServices.getAllMoments().then((res) => {
      setMoments(res);
    });
  };

  // FUNCIÓ PER BUSCAR AMB EL SEARCHER
  const getBySearch = (data) => {
    momentServices.getBySearch(data).then((res) => {
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

  //FUNCIÓ PER EDITAR UN MOMENT, CARREGAR LES DADES DEL FORUMLARI
  // const editMoment = (moment) => { // agafa el moment de la card botó "edit"
  //   setMomentToEdit(moment);
  // //   setIsEditMode(!isEditMode);
  // //   console.log(isEditMode);
  //   console.log(momentToEdit);
  // };

  // COMPROVAR SI LA FUNCIÓ ÉS NECESSÀRIA!!!!!!!!!
  // const editMoment = (moment) => {
  //   setIsEditMode(!isEditMode);
  //   // console.log(isEditMode)
  //   momentServices.getMomentById(moment.id).then(res => {
  //       setMomentToEdit(res)

  //   })
  // }

  return (
    <>
      <CtSearch>
        <Search
          getBySearch={getBySearch}
          search={search}
          setSearch={setSearch}
        />
      </CtSearch>
      <CtMoments>
        {moments.map((moment, key) => (
          <Card
            key={key}
            moment={moment}
            deleteMoment={deleteMoment}

            /*editMoment={editMoment}*/
          />
        ))}
      </CtMoments>
    </>
  );
}

export default Moments;
