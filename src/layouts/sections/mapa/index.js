import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import BaseLayout from "layouts/sections/components/BaseLayout";
import { useState } from "react";
import react from "react";
import axios from "axios";


export default function Mapa() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,

  })

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <BaseLayout
      title="Mapa"
      breadcrumb={[
        { label: "About us", route: "pages/landing-pages/about-us" },
        // { label: "Page Headers" },
      ]}
    >
      <Map />
    </BaseLayout>
  );


  function Map() {
    return <GoogleMap zoom={10} center={{ lat: 9.8893994, lng: -84.0895493 }} mapContainerStyle={{ width: "100%", height: "100vh" }} mapContainerClassName="map-container" >
    </GoogleMap>;
  }
}

