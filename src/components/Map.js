import React, { useState } from "react";
import { Map, Marker, ZoomControl } from "pigeon-maps";
import { maptiler } from "pigeon-maps/providers";
import useLocation from "../hooks/useLocation";

const maptilerProvider = maptiler('datlaePY7Ksenqv76WTM', 'streets');

const Mapa = () => {
  const location = useLocation();
  const [zoom, setZoom] = useState(11);

  return location ? (
    <Map
      provider={maptilerProvider}
      dprs={[1, 2]}
      center={location}
      height="500px"
      zoom={zoom}
      /* onBoundsChanged={({ center, zoom }) => {
    setCenter(center);
    setZoom(zoom);
  }} */
    >
      <Marker width={50} anchor={location} onClick={() => {}} />
      <ZoomControl />
    </Map>
  ) : (
    "Loading"
  );
};

export default Mapa;
