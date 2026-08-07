const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/iss", async (req, res) => {
  try {
    const response = await axios.get(
      "http://api.open-notify.org/iss-now.json"
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({
      message: "Unable to fetch ISS data",
    });
  }
});

module.exports = router;