const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

//const connectDB = require("./config/db");

const satelliteRoutes = require("./routes/satelliteRoutes");
const issRoutes = require("./routes/issRoutes");

dotenv.config();

//connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", satelliteRoutes);
app.use("/api", issRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});