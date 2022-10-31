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

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Ecotrade React components
import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";

// Presentation page components
import ExampleCard from "pages/Presentation/components/ExampleCard";
import css from "../../../imagenes.css";
// Data
import data from "pages/Presentation/sections/data/pagesData";
import nft1 from "pages/imagenes/nft1.png";
import nft2 from "pages/imagenes/nft2.png";
import nft3 from "pages/imagenes/nft3.png";
import nft4 from "pages/imagenes/nft4.png";
import nft5 from "pages/imagenes/nft5.png";
import nft6 from "pages/imagenes/ntf6.png";
import logo from "pages/imagenes/logo.jpg";



function Pages() {

  const renderData = data.map(({ image, name, route, css }) => (
    <Grid  item xs={12} md={8} key={name} marginRight="25px"  >
      <Link to={route}>
        <ExampleCard   image={image}  name={name} display="grid" minHeight="auto" />
      </Link>

    </Grid>
  ));

  return (
    //se hcace para arriba
    <MKBox component="section" py={-5}>
      <Container>
        <Grid

          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"

          sx={{ textAlign: "center", my: -10, mx: "auto", px: 0.75 }}
        >
          <MKBadge
            variant="contained"
            color="info"
            badgeContent="Metodología"
            container
            sx={{ mb: 2 }}
          />
          <MKTypography variant="h2" fontWeight="bold">
            Nuestro marco de trabajo
          </MKTypography>
          <MKTypography variant="body1" color="text">
            La manera mas sencilla de dar un mensaje
            <br /> es con acciones.
            <br />Intercambio social, ecónomico y financiero invertidos en el futuro de la humanidad.
          </MKTypography>
        </Grid>
      </Container>
      <Container sx={{ mt: { xs: 8, lg: 16 } }}>
        <Grid spacing={3} >
          <div style={{ display: 'flex' }}>
            {renderData}
          </div>
          {/* ml sirva para mover a la derecha las imagenes */}
          {/* <Grid item xs={12} md={5} sx={{ ml: "50%" }}>
            <MKBox position="relative">
              <MKBox component="img" class="nftima" src={nft2} alt="nft2" width="50%" />
            </MKBox>
          </Grid>
          <Grid item xs={12} md={5} sx={{ ml: "40%" }}>
            <MKBox position="relative">
              <MKBox component="img" src={nft1} class="nftima" alt="nft1" width="50%" />
            </MKBox>
          </Grid> */}
          <br></br>
          <br></br>
          <Grid >
            <MKBox container
              item
              xs={12}
              lg={6}
              flexDirection="column"
              alignItems="center"

              sx={{
                textAlign: "center", my: 10
                , mx: "auto", px: 0.75
              }}>
              <MKTypography variant="h2" fontWeight="bold">
                Ejemplos de nuestros NFT's
              </MKTypography>
              <MKTypography variant="body1" color="text">
                creado por nuestro generador de nfts
                <br /> con tecnologia hashlips, smartcontract, blockchain.
              </MKTypography>
            </MKBox>
          </Grid>
          <Grid item xs={12} md={5} sx={{ ml: "20%", my: 20 }}>

            <table class="default">

              <tr>

                <td>  <Grid item xs={12} md={5} sx={{ ml: "50%" }}>
                  <MKBox position="relative">
                    <MKBox component="img" class="nftima" src={nft2} alt="nft2" width="50%" />
                  </MKBox>
                </Grid></td>

                <td><Grid item xs={12} md={5} sx={{ ml: "40%" }}>
                  <MKBox position="relative">
                    <MKBox component="img" src={nft1} class="nftima" alt="nft1" width="50%" />
                  </MKBox>
                </Grid></td>

                <td><Grid item xs={12} md={5} sx={{ ml: "40%" }}>
                  <MKBox position="relative">
                    <MKBox component="img" src={nft3} class="nftima" alt="nft3" width="50%" />
                  </MKBox>
                </Grid></td>

              </tr>

              <tr>

                <td>  <Grid item xs={12} md={5} sx={{ ml: "50%" }}>
                  <MKBox position="relative">
                    <MKBox component="img" class="nftima" src={nft4} alt="nft2" width="50%" />
                  </MKBox>
                </Grid></td>

                <td><Grid item xs={12} md={5} sx={{ ml: "40%" }}>
                  <MKBox position="relative">
                    <MKBox component="img" src={nft6} class="nftima" alt="nft1" width="50%" />
                  </MKBox>
                </Grid></td>

                <td><Grid item xs={12} md={5} sx={{ ml: "40%" }}>
                  <MKBox position="relative">
                    <MKBox component="img" src={nft5} class="nftima" alt="nft3" width="50%" />
                  </MKBox>
                </Grid></td>

              </tr>
            </table>
          </Grid>

          <Grid >
            <MKBox container
              item
              xs={12}
              lg={6}
              flexDirection="column"
              alignItems="center"

              sx={{
                textAlign: "center", my: 10
                , mx: "auto", px: 0.75
              }}>
              <MKTypography variant="h2" fontWeight="bold">
                EcoTrade logo
              </MKTypography>
              <MKTypography variant="body1" color="text">
                Nuestro logo simboliza el planeta Tierra, utiliza colores de verdes suaves para transmitir calidez y eficacia.
                <br /> Los colores azules suaves pasteles representan tecnología y caridad.

              </MKTypography>
            </MKBox>
          </Grid>

          <Grid item xs={12} md={5} sx={{ ml: "40%" }}>
            <MKBox component="img" src={logo} alt="logo" class="logo2" marginRight="50%" />

          </Grid>

        </Grid>
      </Container>
    </MKBox >
  );
}

export default Pages;
