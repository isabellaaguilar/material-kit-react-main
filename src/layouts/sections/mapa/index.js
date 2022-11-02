


import { useEffect, useMemo } from "react";
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import BaseLayout from "layouts/sections/components/BaseLayout";
import react from "react";
import axios from "axios";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

import React, { useState } from "react";
import { GoogleMap, InfoWindow, useLoadScript, Marker } from "@react-google-maps/api";


const Mapa = () => {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBXvodJ1BTbGIVjYsnBe7cEXVUPgnM5Nus&libraries=drawing&callback=initMap"
  })

  const [activeMarker, setActiveMarker] = useState(null);
  const [solicitud, setSolicitudes] = useState([])

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker)
    {
      return;
    }
    setActiveMarker(marker);
  };

  const handleOnLoad = (map) => {
    const bounds = new google.maps.LatLngBounds();
    solicitud.forEach(({ position }) => bounds.extend(position));
    map.fitBounds(bounds);
  };


  useEffect(async () => {
    var solicitudesEmpresa = await axios.post(
      "http://localhost:3001/api/obtenerSolicitudesEmpresa",
      {
        estaAprobado: true,
      }
    );

    let x = [];
    solicitudesEmpresa.data.solicitudEmpresaPendientes.map((solicitud, i) => {
      x.push({
        id: solicitud.id,
        name: solicitud.nombre,
        position: { lat: Number(solicitud.longitud), lng: Number(solicitud.latitud) }, 
        nft: solicitud.NFT,
        tipoEmpresa: solicitud.TIPOEMPRESA,
        tipoNFT: solicitud.TIPONFT,

      });
    });

    console.log(x)

    setSolicitudes(x);
  }, [])


  if (!isLoaded) return <div>Loading...</div>;


  return (
    <BaseLayout
      title="Mapa"
      breadcrumb={[
        { label: "About us", route: "pages/landing-pages/about-us" },
        // { label: "Page Headers" },
      ]}


    >
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100vh" }}
        onLoad={handleOnLoad}
        onClick={() => setActiveMarker(null)}


      >

        {solicitud.map(({ id, name, position, nft, tipoEmpresa, tipoNFT }) => (
          <Marker

            key={id}
            position={position}
            onClick={() => handleActiveMarker(id)}
          >
            {activeMarker === id ? (
              <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                
                <div>
                  <div>Nombre de empresa: {name}</div>
                  <div>Tipo Empresa: {tipoEmpresa}</div> 
                  <div>Tipo NFT: {tipoNFT}</div> 
                  <div> <img src={nft}></img></div>
                </div>
              </InfoWindow>
            ) : null}
          </Marker>
        ))}
      </GoogleMap>
    </BaseLayout>

  );

}







export default Mapa;






// export default function Mapa() {
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: "AIzaSyBXvodJ1BTbGIVjYsnBe7cEXVUPgnM5Nus&libraries=drawing&callback=initMap"


//   })

//   if (!isLoaded) return <div>Loading...</div>;
//   return (
//     <BaseLayout
//       title="Mapa"
//       breadcrumb={[
//         { label: "About us", route: "pages/landing-pages/about-us" },
//         // { label: "Page Headers" },
//       ]}
//     >


//       <Map />
//     </BaseLayout>
//   );


//   function Map() {
//     return <GoogleMap zoom={10} center={{ lat: 9.8893994, lng: -84.0895493 }} mapContainerStyle={{ width: "100%", height: "100vh" }} mapContainerClassName="map-container" >
//     </GoogleMap>;

//   }
// }

