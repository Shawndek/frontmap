import React, { useState } from "react";
import { Map, Marker, Overlay, ZoomControl } from "pigeon-maps";
import { maptiler } from "pigeon-maps/providers";
import OverlayInfo from "./Dialog";

const maptilerProvider = maptiler("datlaePY7Ksenqv76WTM", "streets");

const Mapa = () => {
  const [center, setCenter] = useState([50.879, 4.6997]);
  const [zoom, setZoom] = useState(11);

  return (
    <Map
      provider={maptilerProvider}
      dprs={[1, 2]}
      height={500}
      center={center}
      zoom={zoom}
      onBoundsChanged={({ center, zoom }) => {
        setCenter(center);
        setZoom(zoom);
      }}
    >
      <Marker width={50} anchor={[50.879, 4.6997]} onClick={() => {}} />
      <ZoomControl />
    </Map>
  );
};

export default Mapa;
