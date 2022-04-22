import React, { useEffect, useState } from 'react';
import { Map, Marker, ZoomControl } from 'pigeon-maps';
import { maptiler } from 'pigeon-maps/providers';
import { data } from '../App';

const maptilerProvider = maptiler('datlaePY7Ksenqv76WTM', 'streets');

const Mapa = ({ data }) => {
  const [coordinates, setCoordinates] = useState();
  const [zoom, setZoom] = useState(11);

  useEffect(() => {
    if (data) setCoordinates(data.coordinates);
  }, [data]);

  return (
    <>
      {coordinates && (
        <Map
          provider={maptilerProvider}
          dprs={[1, 2]}
          center={[0, 0]}
          zoom={zoom}
        >
          <Marker width={50} anchor={data.coordinates} onClick={() => {}} />
          <ZoomControl />
        </Map>
      )}
    </>
  );
};

export default Mapa;
