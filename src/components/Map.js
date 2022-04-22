import React, { useState } from "react";
import { Map, Marker, ZoomControl } from "pigeon-maps";
import { maptiler } from "pigeon-maps/providers";
import { data } from "../App";
import CurrentLocation from "./IP";

const maptilerProvider = maptiler("datlaePY7Ksenqv76WTM", "streets");

const Mapa = () => {
  const [center, setCenter] = useState(/* [location.lat, location.lng] */);
  const [zoom, setZoom] = useState(11);

  return (
    <Map
      provider={maptilerProvider}
      dprs={[1, 2]}
      center={center}
      zoom={zoom}
      /* onBoundsChanged={({ center, zoom }) => {
        setCenter(center);
        setZoom(zoom);
      }} */
    >
      <Marker
        width={50}
        anchor={[
          parseFloat(data.coordinates[0]),
          parseFloat(data.coordinates[1]),
        ]}
        onClick={() => {}}
      />
      <ZoomControl />
    </Map>
  );
};

export default Mapa;
