import React, { useState } from "react";
import { Map, Marker, ZoomControl } from "pigeon-maps";
import { maptiler } from "pigeon-maps/providers";
import useLocation from "../hooks/useLocation";

const maptilerProvider = maptiler('datlaePY7Ksenqv76WTM', 'streets');

const Mapa = ({data}) => {
  const location = useLocation();
  const [zoom, setZoom] = useState(11);

  return location ? (
    <Map
      provider={maptilerProvider}
      dprs={[1, 2]}
      center={data? data.coordinates:location}
      height={500}
      zoom={zoom}
    >
      <Marker width={50} anchor={data? data.coordinates:location} />
      <ZoomControl />
    </Map>
  ) : (
    "Loading"
  );
};

export default Mapa;