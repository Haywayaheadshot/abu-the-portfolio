import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

const LocationMap = () => (
  <MapContainer
    center={[5.6037, -0.1870]}
    zoom={5}
    scrollWheelZoom={false}
    style={{
      height: '20vh', width: '40vw', border: '1px solid #ccc', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    }}
  >
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
  </MapContainer>
);

export default LocationMap;
