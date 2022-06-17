import React from 'react';
import { BtNavbar, CtLogo, CtMenu, CtNavbar, Logo } from './Navbar.sytled';


export default function Navbar() {
  return (
    <>
    <CtNavbar>
        Navbar

        <CtMenu>
            <BtNavbar>Log In</BtNavbar>
            <BtNavbar>Sign In</BtNavbar>
        </CtMenu>
         
        

    </CtNavbar>
    </>
  )
}

// < Logo src={img} alt='logo' /> i importar