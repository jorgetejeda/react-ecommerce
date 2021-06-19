import React from 'react';
import {
  MapContainer as LeafMap,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet';

const Map = ({ data }) => {
  const mapStyle = { width: '100%', height: '60vh' };
  return (
    <LeafMap
      style={mapStyle}
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={data}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </LeafMap>
  );
};

export default Map;
