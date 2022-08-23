import { LoginSignup } from "../components/forms/LoginSignUp";
import Navbar from "../components/navbar/Navbar";
import NavbarMobileBottom from "../components/navbar/navbarMobile/NavbarMobileBottom";


function LoginPage() {
 
  return (
    <>
    <Navbar/>
    <LoginSignup/>
    <NavbarMobileBottom/>
    </>
  )
}

export default LoginPage