import React from 'react';
import shotcut from '../assets/img/shotcut.png';
import { BtNavbar, CtLogo, CtMenu, CtNavbar, Logo } from './Navbar.sytled';


export default function Navbar() {
  return (
    <>
    <CtNavbar>
        <CtLogo>
          <Logo src={shotcut}/>
        </CtLogo>


        <CtMenu>
            <BtNavbar>Log In</BtNavbar>
            <BtNavbar>Sign In</BtNavbar>
        </CtMenu>
         
        

    </CtNavbar>
    </>
  )
}

// < Logo src={img} alt='logo' /> i importar