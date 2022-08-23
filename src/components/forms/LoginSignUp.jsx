import { useState } from "react";
import { CtForm, CtInput, Label, BtSubmit } from "../../components/forms/Form.styled";
import { CtButtons } from "../momentCard/Card.styled";
import { authService } from "../../services/authService";

export const LoginSignup = () => {
  
  //form
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  //page
  const signup = () => {
    authService.signup(userData).then((res) => {
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
    e.target.id === "login" ? login() : signup();
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
        <Label htmlFor="username" />
        <CtInput
          type="text"
          name="username"
          aria-label="username"
          placeholder="User username"
          value={userData.username}
          onChange={onInputChange}
        />
        <Label htmlFor="email" />
        <CtInput
          type="email"
          name="email"
          aria-label="email"
          placeholder="User email"
          value={userData.email}
          onChange={onInputChange}
        />
        <Label htmlFor="password" />
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
          <BtSubmit type="submit" id="signup" onClick={handleSubmit}>
            SIGNUP
          </BtSubmit>
        </CtButtons>
      </CtForm>
    </div>
  );
};
