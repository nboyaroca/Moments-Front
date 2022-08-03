import { useState } from "react";
import { CtForm, CtInput, Label } from "../components/forms/Form.styled";
import { CtButtons } from "../components/momentCard/Card.styled";
import { BtSubmit } from "../components/forms/Form.styled";
import { authService } from "../services/authService";

export const LoginPage = () => {
  //form
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  //page
  const register = () => {
    authService.register(userData).then((res) => {
      console.log(res);
    });
    resetInputs();
  };

  const login = () => {
    delete userData["email"];
    authService.login(userData).then((res) => {
      console.log(res);
    });
    resetInputs();
  };

  //form

  const onInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    e.target.id === "login" ? login() : register();
  };

  const resetInputs = () => {
    setUserData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CtForm>
        <Label for="username" />
        <CtInput
          type="text"
          name="username"
          aria-label="username"
          placeholder="User username"
          value={userData.username}
          onChange={onInputChange}
        />
        <Label for="email" />
        <CtInput
          type="email"
          name="email"
          aria-label="email"
          placeholder="User email"
          value={userData.email}
          onChange={onInputChange}
        />
        <Label for="password" />
        <CtInput
          type="password"
          name="password"
          aria-label="password"
          placeholder="User password"
          value={userData.password}
          onChange={onInputChange}
        />
        <CtButtons>
          <BtSubmit type="submit" id="login" onClick={handleSubmit}>
            LOGIN
          </BtSubmit>
          <BtSubmit type="submit" id="register" onClick={handleSubmit}>
            REGISTER
          </BtSubmit>
        </CtButtons>
      </CtForm>
    </div>
  );
};
