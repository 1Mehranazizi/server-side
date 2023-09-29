"use cleint";

import React, { useState } from "react";
import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MapMarker from "../../../public/img/location.png";
import L from "leaflet";

const customIcon = new L.Icon({
  iconUrl: MapMarker.src,
  iconSize: new L.Point(40, 47),
});

function MyComponent({ setMarker }) {
  const map = useMapEvents({
    drag: (e) => {
      setMarker([e.target.getCenter().lat, e.target.getCenter().lng]);
    },
  });
  return null;
}

const Map = ({ location, setLocation }) => {
  const zoomLevel = 15;

  return (
    <div className="mt-4">
      <MapContainer
        center={location}
        zoom={zoomLevel}
        dragging={(e) => console.log(e)}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MyComponent setMarker={setLocation} />
        <Marker position={location} icon={customIcon} />
      </MapContainer>
    </div>
  );
};

export default Map;
