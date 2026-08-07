import { useEffect, useState } from "react";

function SatelliteCard({ satellite }) {
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    if (!satellite) return;

    const fav = localStorage.getItem("favoriteSatellite");

    if (fav === satellite.name) {
      setFavorite(true);
    } else {
      setFavorite(false);
    }
  }, [satellite]);

  const toggleFavorite = () => {
    if (!satellite) return;

    if (favorite) {
      localStorage.removeItem("favoriteSatellite");
      setFavorite(false);
    } else {
      localStorage.setItem(
        "favoriteSatellite",
        satellite.name
      );
      setFavorite(true);
    }
  };

  if (!satellite) {
    return (
      <div className="card">
        <h2>No Satellite Selected</h2>
      </div>
    );
  }

  return (
    <div className="card">

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>🛰 {satellite.name}</h2>

        <button
          onClick={toggleFavorite}
          style={{
            border: "none",
            background: "transparent",
            fontSize: "28px",
            cursor: "pointer",
          }}
        >
          {favorite ? "⭐" : "☆"}
        </button>
      </div>

      <div className="stat">
        <span>Latitude</span>
        <span>{satellite.latitude}</span>
      </div>

      <div className="stat">
        <span>Longitude</span>
        <span>{satellite.longitude}</span>
      </div>

      <div className="stat">
        <span>Altitude</span>
        <span>{satellite.altitude}</span>
      </div>

      <div className="stat">
        <span>Velocity</span>
        <span>{satellite.velocity}</span>
      </div>

    </div>
  );
}

export default SatelliteCard;