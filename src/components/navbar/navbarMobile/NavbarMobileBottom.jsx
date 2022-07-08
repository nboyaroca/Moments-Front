import React from "react";
import { Link } from "react-router-dom";
import {
  CtButtons,
  CtNavbar,
  BtNavbar,
  BtMain
} from "./NavbarMobile.styled";

function NavbarMobileBottom(moment) {
  return (
    <CtNavbar>
      <CtButtons>
        {/* <CtUser>
          <BtButton>
            <i className="fa-solid fa-user-astronaut"></i>
          </BtButton>
          <TxtUser>{moment.user} Astronaut </TxtUser>
        </CtUser> */}
        <BtNavbar>
          <i className="fa-solid fa-user-astronaut"></i>
        </BtNavbar>
        <Link to="/form">
          <BtNavbar><i className="fa-solid fa-plus"></i></BtNavbar>
        </Link>
        <Link to="/">
          <BtMain><i className="fa-regular fa-building"></i></BtMain>
        </Link>
        <BtNavbar><i className="fa-regular fa-comment-dots"></i></BtNavbar>
        <BtNavbar><i className="fa-solid fa-magnifying-glass"></i></BtNavbar>
      </CtButtons>
    </CtNavbar>
  );
}

export default NavbarMobileBottom;
