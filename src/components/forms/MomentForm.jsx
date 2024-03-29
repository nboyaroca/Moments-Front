import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { momentServices } from "../../services/momentServices";
import {
  CtForm,
  CtInput,
  Label,
  CtNewMoment,
  BtSubmit,
  CtButtons,
} from "./Form.styled";

export function MomentForm() {
  const { id } = useParams();
  const [newMoment, setNewMoment] = useState({});
  const navigate = useNavigate();

  
  useEffect(() => {
    id?
      getMomentById(id) : setNewMoment({ title: "", description: "", imgUrl: "" });
  }, [id]);

  // useEffect(() => {
  //   getMomentById(id)
  // }, [id]);

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
        navigate("/");
      }
    });
  };

  // Funció per buidar el formulari
  const resetInputsForm = () => {
    setNewMoment({ title: "", description: "", imgUrl: "" });
  };

  return (
    <CtNewMoment>
      <CtForm onSubmit={handleSubmit}>
        <Label htmlFor="title">
          Enter the name of the new picture:
          <CtInput
            type="text"
            name="title"
            aria-label="title"
            placeholder="Moment title"
            value={newMoment.title ||''}
            onChange={onInputChange}
          />
        </Label>
        <Label>
          Write a description of the picture:
          <CtInput
            type="text"
            name="description"
            aria-label="description"
            placeholder="Moment description"
            value={newMoment.description ||''}
            onChange={onInputChange}
          />
        </Label>
        <Label>
          Insert the url of the picture:
          <CtInput
            type="url"
            name="imgUrl"
            aria-label="imgUrl"
            placeholder="Image URL"
            value={newMoment.imgUrl ||''}
            onChange={onInputChange}
          />
        </Label>
        <CtButtons>
          {id ? (
            <BtSubmit type="submit">EDIT</BtSubmit>
          ) : (
            <BtSubmit type="submit">SUBMIT</BtSubmit>
          )}
          
        <BtSubmit type="reset" onClick={resetInputsForm}>
          CANCEL
        </BtSubmit>
          
          
        </CtButtons>
      </CtForm>
    </CtNewMoment>
  );
}

export default MomentForm;
