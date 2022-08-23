import React from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";
// import { momentServices } from "../../services/momentServices";
import shotcut from "../../assets/img/shotcut-logo.svg";
import {
  BtNavbar,
  BtMain,
  CtLogo,
  CtMenu,
  CtNavbar,
  Logo,
} from "./Navbar.sytled";
import NavbarMobileBottom from "./navbarMobile/NavbarMobileBottom";



export default function Navbar( props ) {

  // const [search, setSearch] = useState("");

  // const getBySearch = (data) => {
  //   momentServices.getBySearch(data).then((res) => {
  //     console.log(res)
  //     return res;
      
  //   });
  // };

  // const onInputChange = (e) => { //està atent al què introduïm a l'input
  //   setSearch(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   getBySearch(search);
  //   // console.log(search)
  // }

// VULL FILTRAR ELS MOMENTS QUE CONTINGUIN LA PARAULA I DEIXAR LA LLISTA NOMÉS AMB ELS FILTRATS
  return (
    <>
      <CtNavbar>
        <CtLogo>
          <Logo src={shotcut} filter={props.filter} alt="logo" />
          <Link to="/">
            <BtMain>MOMENTS</BtMain>
          </Link>
        </CtLogo>



        <CtMenu>
          <Link to="/form">
            <BtNavbar>NEW</BtNavbar>
          </Link>
          <Link to="/login">
            <BtNavbar>Log In</BtNavbar>
          </Link>
          <Link to="/login">
            <BtNavbar>Sign Up</BtNavbar>
          </Link>
        </CtMenu>
      </CtNavbar>

      <NavbarMobileBottom>
        
      </NavbarMobileBottom>
    </>
  );
}
