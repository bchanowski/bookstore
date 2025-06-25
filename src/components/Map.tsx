import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "../styles/Map.css";
const Map = () => {
  return (
    <div id="map" className="map-div">
      <MapContainer center={[54.505, 18.544]} zoom={15} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[54.505, 18.544]}></Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
