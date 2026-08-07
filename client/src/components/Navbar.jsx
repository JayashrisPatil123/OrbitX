function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <h2>🛰 OrbitX</h2>
        <small style={{ color: "#9CA3AF" }}>
          Live Satellite Tracking Dashboard
        </small>
      </div>

      <div
        style={{
          background: "#22c55e",
          color: "white",
          padding: "8px 16px",
          borderRadius: "20px",
          fontWeight: "bold",
        }}
      >
        ● LIVE
      </div>
    </nav>
  );
}

export default Navbar;