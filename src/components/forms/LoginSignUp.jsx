import { useState } from "react";
import { CtForm, CtInput, Label, BtSubmit } from "../../components/forms/Form.styled";
import { CtButtons } from "../momentCard/Card.styled";
import { authService } from "../../services/authService";
import { AuthUtils } from "../../services/localAuthService";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const LoginSignup = () => {
  
  //form
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  const location = useLocation().pathname

  useEffect(() => {
  },[location])

  //page
  const signup = () => {
    AuthUtils.deleteAuthUser();
    console.log(userData);
    authService.signup(userData).then((res) => {
      console.log(res);
    login(); // executa login automàtic i navigate to home
    // catch o no
    });

  };

  const login = () => {
    console.log(userData)
    authService.login(userData).then((res) => {
      console.log(res);
      console.log(res.username);

      const authUser = {
        token: res.accessToken,
        username: res.username,
        id: res.id,
      };

    AuthUtils.saveAuthUser(authUser);
    navigate("/", { replace: true });

    resetInputs(); // és necessari?
    });
  };

  //form

  const onInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(userData);
  //   e.target.id === "login" ? login() : signup();
  // };

  const resetInputs = () => {
    setUserData({
      username: "",
      email: "",
      password: "",
    });
  };

console.log(location);

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
        {location==="/signup" && 
        <>
        <Label htmlFor="email" />
        <CtInput
          type="email"
          name="email"
          aria-label="email"
          placeholder="User email"
          value={userData.email}
          onChange={onInputChange}
        />
        <Label htmlFor="image" />
        <CtInput
          type="url"
          name="imgUrl"
          aria-label="imgUrl"
          placeholder="Avatar"
          value={userData.avatar}
          onChange={onInputChange}
        />
        </>} 
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
          {location==="/login" ? 
          <BtSubmit type="button" id="login" onClick={login}>
            LOG IN
          </BtSubmit> :
          // <BtSubmit type="submit" id="signup" onClick={handleSubmit}>
          <BtSubmit type="button" id="signup" onClick={signup}>
            SIGN UP
          </BtSubmit>
          }
        </CtButtons>
      </CtForm>
    </div>
  );
};
