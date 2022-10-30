// import ContactUs2 from "layouts/pages/landing-pages/contactus2/formulariocertificado";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import axios from "axios";
// Ecotrade React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKTypography from "components/MKTypography";
import Select from 'react-select';


import routes from "routes";
import React, { Fragment, useEffect, useState } from "react";

import DefaultNavbar from "examples/Navbars/DefaultNavbar";

const Formulario = () => {
  const [datos, setDatos] = useState({
    pdf: "",
    idTipoNFT: "",
  });

  const [tipoNFT, setTipoNFT] = useState([{
    value: "",
    label: "",
  }]);

  const [idTipoNFT, setIdTipoNFT] = useState(-1);

  const convertiraBase64 = (pdf) => {
    Array.from(pdf).forEach((pdf) => {
      var reader = new FileReader();
      reader.readAsDataURL(pdf);
      reader.onload = function () {
        var ArrayAuxiliar = [];
        var base64 = reader.result;
        ArrayAuxiliar = base64.split(",");
        console.log(ArrayAuxiliar[1]);
        setDatos({
          ...datos,
          pdf: ArrayAuxiliar[1],
        });
      };
    });
  };

  const enviarDatos = async (event) => {
    const respuesta =
      await axios.post("http://localhost:3001/api/solicitudNFT", {
        pdf: datos.pdf,
        idTipoNFT: idTipoNFT,

      })
    event.preventDefault();
  }

  const handleChange = selectedChoice => {
    setIdTipoNFT(selectedChoice.value)
  };

  useEffect(async () => {
    const res = await axios.get("http://localhost:3001/api/tipoNFT")
    const dropdown = [];
    res.data.TipoNFT.map(x => {
      dropdown.push({ value: x.id, label: x.nombre })
    })
    setTipoNFT(dropdown)
  }, [])

  return (
    <Fragment>
      <DefaultNavbar
        routes={routes}

      />
      <MKBox component="section" py={12} >
        <Container>
          <Grid container item justifyContent="center" xs={10} lg={7} mx="auto" textAlign="center">
            <MKTypography variant="h3" mb={1}>
              Ingresa el pdf de solicitud de NFT
            </MKTypography>
            <a
              href=" https://drive.google.com/file/d/10bQh24vWfUbipyF7Bb3aIrjP3vaQmoCj/view?usp=sharing "
              download="Ecotrade"
            >
              Haz clic aquí para descargar el archivo
            </a>
          </Grid>
          <Grid container item xs={12} lg={7} sx={{ mx: "auto" }}>
            <MKBox width="100%" component="form" method="post" autocomplete="off" >
              <MKBox p={3}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={8}>
                    <MKInput variant="standard" type="file" name="pdf" onChange={(event) => convertiraBase64(event.target.files)}
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={12} md={8}>
                    <span> Tipo solicitud </span>
                    <Select placeholder="Seleccione tipo de NFT requerido" options={tipoNFT} onChange={handleChange} />
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
                    Enviar datos de la empresa solicitante del nft
                  </button>
                </Grid>
                <MKTypography variant="p" mb={1}>
                </MKTypography>
              </MKBox>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>
    </Fragment >
  );

};

export default Formulario;