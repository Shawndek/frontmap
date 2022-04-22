<<<<<<< HEAD
import React, { useState } from 'react';
import { Map, Marker, ZoomControl } from 'pigeon-maps';
import { maptiler } from 'pigeon-maps/providers';
// import { data } from "../App";
=======
import React, { useState } from "react";
import { Map, Marker, ZoomControl } from "pigeon-maps";
import { maptiler } from "pigeon-maps/providers";
import useLocation from "../hooks/useLocation";
>>>>>>> 5a1bd53ed4d6f7c9df6505f6521517cb7eddc2dc

const maptilerProvider = maptiler('datlaePY7Ksenqv76WTM', 'streets');

<<<<<<< HEAD
const Mapa = ({ data }) => {
  const [center, setCenter] = useState(data.coordinates);
=======
const Mapa = () => {
  const location = useLocation();
>>>>>>> 5a1bd53ed4d6f7c9df6505f6521517cb7eddc2dc
  const [zoom, setZoom] = useState(11);

  return location ? (
    <Map
      provider={maptilerProvider}
      dprs={[1, 2]}
      center={location}
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
