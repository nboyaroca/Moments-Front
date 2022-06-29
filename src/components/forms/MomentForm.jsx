import React, { useState } from "react";
import { CtForm, CtInput, Label, CtNewMoment, BtSubmit } from "./Form.styled";
import { momentServices } from "../../services/momentServices";

// const initForm = {
//     title: '',
//     description: '',
//     imgUrl: '',
// };

export function MomentForm() {
      // const [editedMoment, setEditedMoment] = useState ('');
  const [newMoment, setNewMoment] = useState({});
  
      // const [isEditMode, setIsEditMode] = useState (false)

  // Esdeveniment (atent als canvis a l'input) que modificarà l'estat del formulari
  const onInputChange = (e) => {
    setNewMoment({ ...newMoment, [e.target.name]: e.target.value });
  };

  // Les dades introduïdes són enviades
  const handleSubmit = (e) => {
    e.preventDefault();
    createMoment(newMoment);
    

    // resetInputsForm(e);
  };

  // // Funció per buidar el formulari
  // const resetInputsForm = () => {
  //   setEditedMoment({ id: "", title: "", description: "", imgUrl: "" });
  // };

    // FUNCIÓ PER AFEGIR UN MOMENT
    const createMoment = (data) => {
      momentServices.createMoment(data).then((res) => {
        window.location.href = "/";
        // return <Redirect to="/"/>
        console.log(res)
      });
    };

  // //FUNCIÓ PER EDITAR UN MOMENT (omplir els camps del formulari)
  // const editMoment = (id) => {
  //   let editedMoment = moment.find(moment => moment.id === id);
  //       setEditedMoment(editedMoment);
  //       // setIsEditMode(true);
  //   }

  return (
    <CtNewMoment>
      <CtForm onSubmit={handleSubmit}>
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
        <BtSubmit type="submit">SUBMIT</BtSubmit>
        <BtSubmit>CANCEL</BtSubmit>
      </CtForm>
    </CtNewMoment>
  );
}

export default MomentForm;
