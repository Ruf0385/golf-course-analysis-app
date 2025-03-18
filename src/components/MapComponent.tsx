import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, WMSTileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { MapLocation } from '../types';
import L from 'leaflet';

// Fix for default marker icons in React Leaflet
const defaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = defaultIcon;

// Component to update map view when location changes
const ChangeView = ({ center, zoom }: { center: [number, number]; zoom: number }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
};

interface MapComponentProps {
  location: MapLocation;
}

const MapComponent: React.FC<MapComponentProps> = ({ location }) => {
  return (
    <MapContainer 
      center={[location.lat, location.lng]} 
      zoom={location.zoom} 
      style={{ height: '100%', width: '100%' }}
    >
      <ChangeView center={[location.lat, location.lng]} zoom={location.zoom} />
      
      {/* Base Layer: OpenStreetMap */}
      <TileLayer
        attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {/* DEM Overlay: USGS 3DEP Elevation Data */}
      <WMSTileLayer
        url="https://elevation.nationalmap.gov/arcgis/services/3DEPElevation/ImageServer/WMSServer"
        layers="3DEPElevation" // Raw elevation data layer
        format="image/png"
        transparent={true}
        opacity={0.6} // Semi-transparent to see base layer underneath
        attribution="Elevation data: © USGS, The National Map"
      />
      
      {/* Marker for the specified location */}
      <Marker position={[location.lat, location.lng]}>
        <Popup>
          <div>
            <h3 className="font-bold">Site Location</h3>
            <p>Lat: {location.lat.toFixed(4)}</p>
            <p>Lng: {location.lng.toFixed(4)}</p>
            <p className="mt-2">Click to view detailed analysis</p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
