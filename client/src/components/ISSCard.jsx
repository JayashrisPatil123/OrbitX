import { useEffect, useState } from "react";
import { getISS } from "../services/api";

function ISSCard() {
  const [iss, setIss] = useState(null);

  useEffect(() => {
    async function fetchISS() {
      const data = await getISS();
      setIss(data);
    }

    fetchISS();
  }, []);

  if (!iss) {
    return <p>Loading ISS...</p>;
  }

  return (
    <div className="card">
      <h2>🛰 ISS Live Position</h2>

      <p>
        Latitude:
        {iss.iss_position.latitude}
      </p>

      <p>
        Longitude:
        {iss.iss_position.longitude}
      </p>
    </div>
  );
}

export default ISSCard;