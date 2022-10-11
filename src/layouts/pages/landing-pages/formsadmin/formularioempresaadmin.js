// import ContactUs2 from "layouts/pages/landing-pages/contactus2/formulariocertificado";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";
import axios from "axios";
// Ecotrade React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

import routes from "routes";
import React, { Fragment, useEffect, useState } from "react";

import DefaultNavbar from "examples/Navbars/DefaultNavbar";







const Formulario = () => {

  const [datos, setDatos] = useState({
    nombreEmpresa: '',
    id: '',

  })

  const handleInputChange = (event) => {
    // console.log(event.target.value)
    // esto lo que hacia era mostar literalmente todos lo que se escribia en el input letra por letra
    setDatos({
      ...datos,
      [event.target.name]: event.target.value
      // el name es el name que le pusimos a los inputs hace la relacion
    })

  }

  const enviarDatos = async (event) => {

    console.log("envio")

    axios.post("http://localhost:3001/api/crearFormularioUsuarioEmpresa", {
      Nombre: datos.nombreEmpresa,
      Id: datos.id,
      // password: "probando",

      // esAdmin: 1 //0 no es admin
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    console.log(datos.nombreEmpresa + ' ' + datos.id)
    event.preventDefault();

    debugger
  }


  return (


    <Fragment>
      <DefaultNavbar
        routes={routes}
      // action={{
      //   type: "external",
      //   route: "https://www.creative-tim.com/product/material-kit-react",
      //   label: "free download",
      //   color: "info",
      // }}

      />
      <MKBox component="section" py={12} >
        <Container>
          <Grid container item justifyContent="center" xs={10} lg={7} mx="auto" textAlign="center">
            <MKTypography variant="h3" mb={1}>
              Ingresa la empresa aprobada
            </MKTypography>

          </Grid>
          <Grid container item xs={12} lg={7} sx={{ mx: "auto" }}>
            <MKBox width="100%" component="form" method="post" autocomplete="off" >
              <MKBox p={3}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <MKInput variant="standard" label="Nombre de usuario de la empresa" name="nombreEmpresa" onChange={handleInputChange} fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput variant="standard" label="numero de id del usuario empresa" type="number" name="id" onChange={handleInputChange} fullWidth />
                  </Grid>


                  <Grid item xs={12} alignItems="center" ml={-1}>
                    {/* <Switch checked={checked} onChange={handleChecked} /> */}
                    <MKTypography
                      variant="button"
                      fontWeight="regular"
                      color="text"
                      ml={-1}
                      sx={{ cursor: "pointer", userSelect: "none" }}
                      // onClick={handleChecked}
                      type="submit"
                    >
                      {/* &nbsp;&nbsp;I agree the&nbsp; */}
                    </MKTypography>
                    <MKTypography
                      component="a"
                      href="#"
                      variant="button"
                      fontWeight="regular"
                      color="dark"
                    >
                      {/* Terms and Conditions */}
                    </MKTypography>
                  </Grid>
                </Grid>
                <Grid container item justifyContent="center" xs={12} my={2}>
                  <button type="button" onClick={enviarDatos} >
                    Enviar datos del nuevo usuario


                  </button>


                </Grid>
                <MKTypography variant="p" mb={1}>
                </MKTypography>
              </MKBox>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>


    </Fragment>



  );

}
export default Formulario;