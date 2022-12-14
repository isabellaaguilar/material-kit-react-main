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

// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";
import { useState } from "react";
import axios from "axios"
import { Margin } from "@mui/icons-material";



function generador() {

  const [state, setState] = useState(null);

  function setNFT(nft) {
    setState(nft)
  }


  async function salir() {
    var res = await axios({
      url: 'http://localhost:3001/api/generador',
      method: 'GET',
      mode: 'no-cors'
    })
    const data = res.data.imagenes[0];
    setNFT(data)
  }



  return (
    <BaseLayout
      title="Generador NFT"
      breadcrumb={[
        { label: "About us", route: "pages/landing-pages/about-us" },
        // { label: "Page Headers" },
      ]}
    >

      <button onClick={salir} className="botongenerar" >Generar</button>
      <img src={state} width="480" height="400" className="NFT" style={{ display: 'block', justifyContent: 'center', marginLeft: "400px" }} ></img>

    </BaseLayout>
  );
}

export default generador;
