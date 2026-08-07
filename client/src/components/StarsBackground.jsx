function StarsBackground() {
  return (
    <div className="stars">
      {[...Array(120)].map((_, i) => (
        <span
          key={i}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
}

export default StarsBackground;