import React, { useState } from "react";
import {
  CtForm,
  CtInput,
  Label,
  CtNewMoment,
  BtSubmit,
  CtButtons,
} from "./Form.styled";
import { momentServices } from "../../services/momentServices";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export function MomentForm(moments) {

  const {id} = useParams();
  const [newMoment, setNewMoment] = useState({});
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (id) getMomentById()
  // }, [id]);

  useEffect(() => {
    getMomentById(id)
  }, [id]);

  // FUNCIÓ PER CRIDAR EL MOMENT PER ID
  const getMomentById = (id) => {
    momentServices.getMomentById(id).then((res) => {
      if (res) {
        setNewMoment(res);
      }
    });
  };

  // Esdeveniment (atent als canvis a l'input) que modificarà l'estat del formulari
  const onInputChange = (e) => {
    setNewMoment({ ...newMoment, [e.target.name]: e.target.value });
  };

  // Les dades introduïdes són enviades
  const handleSubmit = (e) => {
    e.preventDefault();

    !id ? createMoment() : updateMoment();

    resetInputsForm();
  };

 

  // FUNCIÓ PER AFEGIR UN MOMENT
  const createMoment = () => {
    momentServices.createMoment(newMoment).then((res) => {
      navigate("/");
    });
  };

  // FUNCIÓ PER CANVIAR UN MOMENT
  const updateMoment = () => {
    momentServices.updateMoment(id, newMoment).then((res) => {
        if (res) {
        console.log("updated")
      navigate("/");
    }
    });
    
    // resetInputsForm();
    // setIsEditMode(false);
  };

   // Funció per buidar el formulari
   const resetInputsForm = () => {
    setNewMoment({title:"", description:"", imgUrl:""});
  };


  return (
    <CtNewMoment>
      <CtForm onSubmit={handleSubmit}>
        <Label>
          Enter the name of the new picture:
          <CtInput
            type="Text"
            name="title"
            placeholder="Moment title"
            value={newMoment.title}
            onChange={onInputChange}
          />
        </Label>
        <Label>
          Write a description of the picture:
          <CtInput
            type="Text"
            name="description"
            placeholder="Moment description"
            value={newMoment.description}
            onChange={onInputChange}
          />
        </Label>
        <Label>
          Insert the url of the picture:
          <CtInput
            type="url"
            name="imgUrl"
            placeholder="Image URL"
            value={newMoment.imgUrl}
            onChange={onInputChange}
          />
        </Label>
        <CtButtons>
          {id ? (
            <BtSubmit type="submit">EDIT</BtSubmit>
          ) : (
            <BtSubmit type="submit">SUBMIT</BtSubmit>
          )}
          <BtSubmit type="reset" onClick={resetInputsForm}>CANCEL</BtSubmit>
        </CtButtons>
      </CtForm>
    </CtNewMoment>
  );
}

export default MomentForm;
