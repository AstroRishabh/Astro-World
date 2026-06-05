

export const generateKundli = async (req, res) => {
  try {
    const { name, date, time, place } = req.body;

    // 🔹 Example kundli generation (replace with actual astrology logic)
    const kundli = {
      name,
      date,
      time,
      place,
      lagna: "Libra",
      planets: {
        Sun: { sign: "Leo", house: 10 },
        Moon: { sign: "Cancer", house: 9 },
        Mars: { sign: "Aries", house: 7 }
      }
    };

    res.json(kundli); // ✅ Return actual JSON kundli
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to generate kundli" });
  }
};

//Kundli Milan Function

// controllers/kundliController.js

export const calculateKundli = async (data) => {
  // Dummy logic (replace with real API later)

  const nakshatras = ["Ashwini", "Bharani", "Krittika"];
  const randomNakshatra =
    nakshatras[Math.floor(Math.random() * nakshatras.length)];

  return {
    moon_sign: Math.floor(Math.random() * 12) + 1, // 1–12
    nakshatra: randomNakshatra,
  };
};