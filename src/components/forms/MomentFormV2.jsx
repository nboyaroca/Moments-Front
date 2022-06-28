import React, { useState } from "react";
import { CtForm, CtInput, Label, CtNewMoment, BtSubmit } from "./Form.styled";
import { momentServices } from "../../services/momentServices";

// const initForm = {
//     title: '',
//     description: '',
//     imgUrl: '',
// };

export function MomentForm() {
  const [newMoment, setNewMoment] = useState({});


  // Esdeveniment (atent als canvis a l'input) que modificarà l'estat del formulari
  const onInputChange = (e) => {
    setNewMoment({ ...newMoment, [e.target.name]: e.target.value });
  };

  // Les dades introduïdes són enviades
  const handleSubmit = () => {
    console.log("click")
    
    addMoment(newMoment); 
  };

 

    // FUNCIÓ PER AFEGIR UN MOMENT
    const addMoment = (data) => {
      momentServices.addMoment(data).then((res) => {
        console.log(res) //redirigir a llista de moments
      });
    };
  
  return (
    <CtNewMoment>
      <CtForm>
        <Label>
          Enter the name of the new picture:
          <CtInput
            type="text"
            name="title"
            placeholder="Moment title"
            value={newMoment.title}
            onChange={onInputChange}
          />
        </Label>
        <Label>
          Write a description of the picture:
          <CtInput
            type="text"
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
        <BtSubmit type="button" onClick={handleSubmit}>SUBMIT</BtSubmit>
        <BtSubmit>CANCEL</BtSubmit>

      </CtForm>
    </CtNewMoment>
  );
}

export default MomentForm;
