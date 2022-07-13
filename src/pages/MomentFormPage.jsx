import React from 'react'
import MomentForm from '../components/forms/MomentForm'
import Navbar from '../components/navbar/Navbar'
import NavbarMobileBottom from '../components/navbar/navbarMobile/NavbarMobileBottom'

function MomentFormPage() {
 
  return (
    <>
    <Navbar/>
    <MomentForm/>
    <NavbarMobileBottom/>
    </>
  )
}

export default MomentFormPage