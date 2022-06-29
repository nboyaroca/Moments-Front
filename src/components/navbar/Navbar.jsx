import React from 'react';
import { Link } from 'react-router-dom';
import shotcut from '../../assets/img/shotcut-logo.svg';
import { BtNavbar, BtMain, CtLogo, CtMenu, CtNavbar, Logo, CtSearch, InputSearch, BtSearch } from './Navbar.sytled';


export default function Navbar(props) {
  return (
    <>
    <CtNavbar>
        <CtLogo>
          <Logo src={shotcut} filter={props.filter} alt='logo' />
          <Link to="/"><BtMain>MOMENTS</BtMain></Link>
        </CtLogo>
        
        <CtSearch>
          <InputSearch type="search" placeholder="Search..." autocomplete="on"/>
          <BtSearch type="submit"><i className="fa-solid fa-magnifying-glass"></i></BtSearch>
        </CtSearch>

        <CtMenu>
            <Link to="/form"><BtNavbar>NEW</BtNavbar></Link>
            <BtNavbar>Log In</BtNavbar>
            <BtNavbar>Sign In</BtNavbar>
        </CtMenu>
         
        

    </CtNavbar>
    </>
  )
}

