function MissionPanel({ satellite }) {
  if (!satellite) return null;

  return (
    <div className="card" style={{ marginBottom: "20px" }}>
      <h2>🚀 Mission Control</h2>

      <div className="stat">
        <span>Mission</span>
        <span>ISS (ZARYA)</span>
      </div>

      <div className="stat">
        <span>Status</span>
        <span style={{ color: "#22c55e" }}>🟢 LIVE</span>
      </div>

      <div className="stat">
        <span>Tracking</span>
        <span>Real-Time</span>
      </div>

      <div className="stat">
        <span>Refresh</span>
        <span>Every 5 Seconds</span>
      </div>

      <div className="stat">
        <span>Last Update</span>
        <span>
          {new Date(
            satellite.timestamp * 1000
          ).toLocaleTimeString()}
        </span>
      </div>
    </div>
  );
}

export default MissionPanel;