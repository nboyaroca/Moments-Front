import React from 'react';
import { Link } from 'react-router-dom';
import shotcut from '../../assets/img/shotcut-logo.svg';
import { BtNavbar, BtMain, CtLogo, CtMenu, CtNavbar, Logo } from './Navbar.sytled';


export default function Navbar(props) {
  return (
    <>
    <CtNavbar>
        <CtLogo>
          <Logo src={shotcut} filter={props.filter} alt='logo' />
          <Link to="/"><BtMain>MOMENTS</BtMain></Link>
        </CtLogo>


        <CtMenu>
            <Link to="/NewMoment"><BtNavbar>NEW</BtNavbar></Link>
            <BtNavbar>Log In</BtNavbar>
            <BtNavbar>Sign In</BtNavbar>
        </CtMenu>
         
        

    </CtNavbar>
    </>
  )
}

// < Logo src={img} alt='logo' /> i importar