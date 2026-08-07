const express = require("express");

const router = express.Router();

const {
    searchSatellite
} = require("../controllers/satelliteController");

router.get("/search", searchSatellite);

module.exports = router;