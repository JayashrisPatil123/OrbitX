import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";

function EarthMap({ satellite, history }) {
  if (!satellite) return null;

  const position = [
    Number(satellite.latitude),
    Number(satellite.longitude),
  ];

  const path =
    history?.map((item) => [
      Number(item.lat),
      Number(item.lng),
    ]) || [];

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
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {path.length > 1 && (
        <Polyline positions={path} color="red" weight={4} />
      )}

      <Marker position={position}>
        <Popup>
          🛰 {satellite.name}
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default EarthMap;