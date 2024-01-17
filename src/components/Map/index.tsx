import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { IMap } from "../../types";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

export const Map = ({ properties, onClickMark }: IMap) => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <MapContainer center={[-37.8405, 146.3323]} zoom={7}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {properties.map((property) => (
          <Marker
            position={[property.latitude, property.longitude]}
            key={property.property_id}
            eventHandlers={{
              click: () => onClickMark(property),
            }}
          ></Marker>
        ))}
      </MapContainer>
    </div>
  );
};
