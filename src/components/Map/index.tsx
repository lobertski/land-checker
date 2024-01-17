import { MapContainer, Popup, TileLayer, Marker } from "react-leaflet";
import { IMap } from "../../types";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

export const Map = ({ properties }: IMap) => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <MapContainer center={[45.4, -75.7]} zoom={12}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {properties.map(({ latitude, longitude, property_id }) => (
          <Marker position={[latitude, longitude]} key={property_id}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};
