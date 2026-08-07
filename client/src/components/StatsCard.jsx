function StatsCard({ satellite }) {
  if (!satellite) {
    return (
      <div className="card">
        <h2>📊 Mission Control</h2>
        <p>No satellite data available.</p>
      </div>
    );
  }

  const lastUpdate = new Date(
    satellite.timestamp * 1000
  ).toLocaleTimeString();

  return (
    <div className="card">
      <h2>📊 Mission Control</h2>

      <div className="stat">
        <span>🛰 Mission</span>
        <span>ISS Tracking</span>
      </div>

      <div className="stat">
        <span>🟢 Status</span>
        <span>LIVE</span>
      </div>

      <div className="stat">
        <span>📡 Refresh Rate</span>
        <span>5 Seconds</span>
      </div>

      <div className="stat">
        <span>🕒 Last Update</span>
        <span>{lastUpdate}</span>
      </div>

      <div className="stat">
        <span>🌍 Latitude</span>
        <span>{Number(satellite.latitude).toFixed(2)}°</span>
      </div>

      <div className="stat">
        <span>🌎 Longitude</span>
        <span>{Number(satellite.longitude).toFixed(2)}°</span>
      </div>

      <div className="stat">
        <span>🚀 Velocity</span>
        <span>{satellite.velocity}</span>
      </div>

      <div className="stat">
        <span>📏 Altitude</span>
        <span>{satellite.altitude}</span>
      </div>
    </div>
  );
}

export default StatsCard;