import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

const satelliteIcon = L.divIcon({
  className: "satellite-marker",
  html: `
    <div style="
      width: 42px;
      height: 42px;
      border-radius: 50%;
      background: #2563eb;
      border: 4px solid white;
      box-shadow: 0 3px 12px rgba(0,0,0,0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 22px;
    ">
      🛰️
    </div>
  `,
  iconSize: [42, 42],
  iconAnchor: [21, 21],
  popupAnchor: [0, -24],
});

function EarthMap({ satellite, history }) {
  if (!satellite) {
    return null;
  }

  const latitude = Number(satellite.latitude);
  const longitude = Number(satellite.longitude);

  if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) {
    return null;
  }

  const position = [latitude, longitude];

  const path =
    Array.isArray(history)
      ? history
          .map((item) => [
            Number(item.lat),
            Number(item.lng),
          ])
          .filter(
            ([lat, lng]) =>
              Number.isFinite(lat) &&
              Number.isFinite(lng)
          )
      : [];

  return (
    <MapContainer
      center={position}
      zoom={3}
      scrollWheelZoom={true}
      style={{
        height: "500px",
        width: "100%",
        borderRadius: "15px",
        marginBottom: "25px",
      }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {path.length > 1 && (
        <Polyline
          positions={path}
          pathOptions={{
            color: "red",
            weight: 4,
          }}
        />
      )}

      <Marker
        position={position}
        icon={satelliteIcon}
      >
        <Popup>
          🛰️ <strong>{satellite.name}</strong>
          <br />
          Latitude: {latitude.toFixed(4)}
          <br />
          Longitude: {longitude.toFixed(4)}
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default EarthMap;