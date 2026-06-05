import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";
import path from "path";
import { fileURLToPath } from "url";
import bookingRoutes from "./routes/bookingRoutes.js";


import dashboardRoutes from "./routes/dashboardRoutes.js";
import kundliRoutes from "./routes/kundli.js";
import authRoutes from "./routes/authRoutes.js";
import kundliMilanRoutes from "./routes/kundliMilanRoutes.js";


import calculateKundli from "./utils/kundliCalculator.js";
import numerologyRoutes from "./routes/numerology.js";

import aiKundliRoutes from "./routes/aiKundli.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/numerology", numerologyRoutes);
app.use("/api/ai", aiKundliRoutes);

app.use("/api/kundli-milan", kundliMilanRoutes);
app.use(express.json());
app.use("/api/booking", bookingRoutes);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "client/build")));


mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});


/* Kundli API */

app.post("/kundli", async (req, res) => {
  try {

    const result = await calculateKundli(req.body);

    const planets = result.planets;

    const moonLongitude = planets.Moon.degree;

    // Call Python astrology engine
    const dashaResponse = await axios.post(
      "http://localhost:8000/dasha",
      {
        moonLongitude: moonLongitude,
        date: req.body.date
      }
    );

    res.json({
      planets,
      moonLongitude,
      dasha: dashaResponse.data.dasha
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Error calculating kundli"
    });

  }
});
