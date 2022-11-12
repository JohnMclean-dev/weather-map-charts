import React from 'react';
import { useState } from 'react'
import './App.css';
import { MapContainer, TileLayer, useMapEvents, Marker, Popup } from 'react-leaflet'

// const position: [number, number] = [1, 1];

function LocationMarker() {
  const [position, setPosition] = useState(null)
  const map = useMapEvents({
    click(e) {
      const lat: number = e.latlng.lat;
      const lng: number = e.latlng.lng;
      console.log(lat, lng)
    }
  })

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  )
}

function App() {
  return (
    <MapContainer center={[0, 0]} zoom={2} scrollWheelZoom={true}>
      {/* basemap here */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <Marker position={[51.505, -0.09]}> */}
      <LocationMarker />
    </MapContainer >
  );
}

export default App;
