import express from "express";

const router = express.Router();

router.post("/generate", async (req, res) => {

  try {

    const { name, date, time, place, latitude, longitude } = req.body;

    // 🔮 Call Flask Astrology Engine
    const flaskResponse = await fetch("http://127.0.0.1:5001/calculate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        date,
        time,
        latitude,
        longitude
      })
    });

    console.log("Flask response status:", flaskResponse.status);
    const astroData = await flaskResponse.json();
    console.log("Generated kundli:", astroData);


    res.json(astroData);

  } catch (error) {

    console.error("Kundli error:", error);

    res.status(500).json({
      message: "Kundli generation failed"
    });

  }

});

export default router;