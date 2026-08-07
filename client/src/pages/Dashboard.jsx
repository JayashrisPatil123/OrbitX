import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import SatelliteCard from "../components/SatelliteCard";
import StatsCard from "../components/StatsCard";
import EarthMap from "../components/EarthMap";
import Loader from "../components/Loader";
import SummaryCards from "../components/SummaryCards";
import StarsBackground from "../components/StarsBackground";

import { searchSatellite } from "../services/api";

function Dashboard() {
  const [satellite, setSatellite] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchSatellite = async (name = "ISS") => {
    try {
      setLoading(true);

      const data = await searchSatellite(name);

      setSatellite(data.satellite);

      setHistory((prev) => {
        const updated = [
          ...prev,
          {
            lat: Number(data.satellite.latitude),
            lng: Number(data.satellite.longitude),
          },
        ];

        return updated.slice(-20);
      });
    } catch (error) {
      console.log(error);
      alert("Unable to fetch satellite data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSatellite("ISS");

    const interval = setInterval(() => {
      fetchSatellite("ISS");
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleSearch = (name) => {
    fetchSatellite(name);
  };

  return (
    <>
      <StarsBackground />

      <Navbar />

      <div className="container">

        <SearchBar onSearch={handleSearch} />

        {loading && <Loader />}

        {satellite && (
          <>
            <SummaryCards satellite={satellite} />

            <EarthMap
              satellite={satellite}
              history={history}
            />

            <div className="grid">
              <SatelliteCard satellite={satellite} />
              <StatsCard satellite={satellite} />
            </div>
          </>
        )}

      </div>
    </>
  );
}

export default Dashboard;