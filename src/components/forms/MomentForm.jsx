import React, { useEffect, useState } from "react";
import { CtForm, CtInput, Label, CtNewMoment, BtSubmit } from "./Form.styled";

// const initForm = {
//     title: '',
//     description: '',
//     imgUrl: '',
// };

export function MomentForm(moment) {
  const [form, setForm] = useState({});
  const [addedMoment, setAddedMoment] = useState ('')

  useEffect(() => {
    setForm();
  }, []);

  // Esdeveniment al cas dels canvis a l'input que modificarà l'estat del Form
  const onInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Les dades introduïdes són enviades
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`The moment you enter is ${moment.title}`);

    resetInputsForm(e);
  };

  //FUNCIÓ PER BUIDAR EL FORMULARI
  const resetInputsForm = () => {
    setAddedMoment({id:"", title:"", description:"", imgUrl:""})
};

  return (
    <CtNewMoment>
      <CtForm onSubmit={handleSubmit}>
        <Label>
          Enter the name of the new picture:
          <CtInput
            type="text"
            name="title"
            placeholder="Moment title"
            value={moment.title}
            onChange={onInputChange}
          />
        </Label>
        <Label>
          Write a description of the picture:
          <CtInput
            type="text"
            name="description"
            placeholder="Moment description"
            value={moment.description}
            onChange={onInputChange}
          />
        </Label>
        <Label>
          Insert the url of the picture:
          <CtInput
            type="url"
            name="imgUrl"
            placeholder="Image URL"
            value={moment.imgUrl}
            onChange={onInputChange}
          />
        </Label>
        <BtSubmit>SUBMIT</BtSubmit>
      </CtForm>
    </CtNewMoment>
  );
}

export default MomentForm;
