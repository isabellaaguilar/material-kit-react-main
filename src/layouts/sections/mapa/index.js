


import { useMemo } from "react";
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import BaseLayout from "layouts/sections/components/BaseLayout";
import react from "react";
import axios from "axios";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

import React, { useState } from "react";
import { GoogleMap, InfoWindow, useLoadScript, Marker } from "@react-google-maps/api";


const markers = [
  {
    id: 1,
    name: "La carpio",
    position: { lat: 9.9624787, lng: -84.1498769 }
  },
  {
    id: 2,
    name: "CEDES Don Bosco",
    position: { lat: 9.8893994, lng: -84.0895493 }
  },
  {
    id: 3,
    name: "San Felipe aqui matan",
    position: { lat: 9.9075497, lng: -84.1402658 }
  },
  {
    id: 4,
    name: "Santa Teresa Cobano",
    position: { lat: 9.6376442, lng: -85.1954562 }
  }
];


const Mapa = () => {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBXvodJ1BTbGIVjYsnBe7cEXVUPgnM5Nus&libraries=drawing&callback=initMap"

  })

  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker)
    {
      return;
    }
    setActiveMarker(marker);
  };

  const handleOnLoad = (map) => {
    const bounds = new google.maps.LatLngBounds();
    markers.forEach(({ position }) => bounds.extend(position));
    map.fitBounds(bounds);
  };





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
        {markers.map(({ id, name, position }) => (
          <Marker
            key={id}
            position={position}
            onClick={() => handleActiveMarker(id)}
          >
            {activeMarker === id ? (
              <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                <div>{name}</div>
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

