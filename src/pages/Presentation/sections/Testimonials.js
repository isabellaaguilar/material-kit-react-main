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

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Ecotrade React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Ecotrade React examples
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";

// Images
import appleLogo from "assets/images/logos/gray-logos/logo-apple.svg";
import facebookLogo from "assets/images/logos/gray-logos/logo-facebook.svg";
import nasaLogo from "assets/images/logos/gray-logos/logo-nasa.svg";
import vodafoneLogo from "assets/images/logos/gray-logos/logo-vodafone.svg";
import digitalOceanLogo from "assets/images/logos/gray-logos/logo-digitalocean.svg";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          {/* <MKTypography variant="h2">Trusted by over</MKTypography>
          <MKTypography variant="h2" color="info" textGradient mb={2}>
            1,679,477+ web developers
          </MKTypography>
          <MKTypography variant="body1" color="text" mb={2}>
            Many Fortune 500 companies, startups, universities and governmental institutions love
            Creative Tim&apos;s products.
          </MKTypography> */}
        </Grid>
        <Grid container spacing={3} sx={{ mt: 8 }}>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Doña Liz (“Soda Liz”)"
              date="1 day ago"
              review="“A veces los chiquillos me intentan comprar vasos plásticos para meter pinceles, pero prefiero darles botellas de plástico cortadas que voy recolectando porque así se reutilizan y ellos no tienen que gastar dinero, y las tapas las guardo para eventualmente de la misma manera reutilizarlas o reciclarlas”"
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="info"
              name="Don Carlos (“Soda Don K”)"
              date="1 week ago"
              review="“Aquí se acumulan muchos plásticos, bolsas empaques y de todo por los productos que llegan, estamos tratando de darles mejor uso ya que a veces es demasiado plástico y no nos parece que sea justo para el ambiente, así que lo guardamos para reciclarlo en lugar de botarlo”"
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Don Pablo (“Soda Carolina”)"
              date="3 weeks ago"
              review="“Por dicha tenemos alternativas porque la cantidad de plásticos que se nos acumulan es impresionante y a veces uno ni sabe qué hacer con tanto”."
              rating={5}
            />
          </Grid>
        </Grid>
        <Divider sx={{ my: 6 }} />
        {/* <Grid container spacing={3} justifyContent="center">
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={appleLogo} alt="Apple" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={facebookLogo} alt="Facebook" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={nasaLogo} alt="Nasa" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={vodafoneLogo} alt="Vodafone" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox
              // component="img"
              // src={digitalOceanLogo}
              // alt="DigitalOcean"
              // width="100%"
              // opacity={0.6}
            />
          </Grid>
        </Grid> */}
      </Container>
    </MKBox>
  );
}

export default Information;
