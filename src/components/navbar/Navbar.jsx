import React from 'react';
import shotcut from '../../assets/img/shotcut-logo.svg';
import { MomentForm } from '../forms/MomentForm';
import { BtNavbar, CtLogo, CtMenu, CtNavbar, Logo } from './Navbar.sytled';


export default function Navbar(props) {
  return (
    <>
    <CtNavbar>
        <CtLogo>
          <Logo src={shotcut} filter={props.filter} alt='logo' />
        </CtLogo>


        <CtMenu>
            <BtNavbar onClick={<MomentForm/>}>NEW</BtNavbar>
            <BtNavbar>Log In</BtNavbar>
            <BtNavbar>Sign In</BtNavbar>
        </CtMenu>
         
        

    </CtNavbar>
    </>
  )
}

// < Logo src={img} alt='logo' /> i importar