function SummaryCards({ satellite }) {
  if (!satellite) return null;

  const cards = [
    {
      title: "Satellite",
      value: satellite.name,
      icon: "🛰",
    },
    {
      title: "Velocity",
      value: satellite.velocity,
      icon: "🚀",
    },
    {
      title: "Altitude",
      value: satellite.altitude,
      icon: "📏",
    },
    {
      title: "Status",
      value: "LIVE",
      icon: "🟢",
    },
  ];

  return (
    <div className="summary-grid">
      {cards.map((card, index) => (
        <div className="summary-card" key={index}>
          <h3>{card.icon}</h3>

          <h4>{card.title}</h4>

          <p>{card.value}</p>
        </div>
      ))}
    </div>
  );
}

export default SummaryCards;