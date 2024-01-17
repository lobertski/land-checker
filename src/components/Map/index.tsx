import { MapContainer, TileLayer, Marker, ZoomControl } from "react-leaflet";
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
    <div>
      <MapContainer
        center={[-37.8405, 146.3323]}
        zoom={7}
        zoomControl={false}
        data-testid="map-container"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <ZoomControl position="bottomleft" />

        {properties.map((property) => (
          <Marker
            position={[property.latitude, property.longitude]}
            key={property.property_id}
            eventHandlers={{
              click: () => onClickMark(property, true),
            }}
          ></Marker>
        ))}
      </MapContainer>
    </div>
  );
};
