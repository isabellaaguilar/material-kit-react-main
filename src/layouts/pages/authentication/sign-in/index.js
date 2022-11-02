/*
=========================================================
* Ecotrade React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Ecotrade React pages
import SignIn from "pages/LandingPages/SignIn";
import { useNavigate } from 'react-router-dom';

export default function SignInPage(deslogearse = false) {

  const navigate = useNavigate();


  if(deslogearse && localStorage.tipoUsuario != undefined){
    localStorage.removeItem("tipoUsuario");
    navigate("/pages/authentication/sign-in")
    window.location.reload();
  } 
  return  <SignIn />;
}
