import React, { useState } from "react";
import { Map, Marker, ZoomControl } from "pigeon-maps";
import { maptiler } from "pigeon-maps/providers";
import { data } from "../App";

const maptilerProvider = maptiler("datlaePY7Ksenqv76WTM", "streets");

const Mapa = () => {
  const [center, setCenter] = useState(data.coordinates);
  const [zoom, setZoom] = useState(11);

  return (
    <Map
      provider={maptilerProvider}
      dprs={[1, 2]}
      center={center}
      zoom={zoom}
      onBoundsChanged={({ center, zoom }) => {
        setCenter(center);
        setZoom(zoom);
      }}
    >
      <Marker width={50} anchor={data.coordinates} onClick={() => {}} />
      <ZoomControl />
    </Map>
  );
};

export default Mapa;
