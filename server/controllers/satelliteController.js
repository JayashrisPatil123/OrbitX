const axios = require("axios");

const searchSatellite = async (req, res) => {
  try {
    const { data } = await axios.get(
      "http://api.open-notify.org/iss-now.json"
    );

    res.json({
      success: true,
      satellite: {
        name: "ISS (ZARYA)",
        latitude: data.iss_position.latitude,
        longitude: data.iss_position.longitude,
        altitude: "420 km",
        velocity: "27,600 km/h",
        timestamp: data.timestamp,
      },
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Unable to fetch ISS data",
    });
  }
};

module.exports = { searchSatellite };