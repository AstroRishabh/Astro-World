import {
  calculateGunMilan
} from "../services/kundliMilan.js";


// 🌟 Generate Dynamic Kundli Data

const generateAstroData = (
  person
) => {

  const nakshatras = [

    "Ashwini",
    "Bharani",
    "Krittika",
    "Rohini",
    "Mrigashira",
    "Ardra",
    "Punarvasu",
    "Pushya",
    "Ashlesha",
    "Magha",
    "Purva Phalguni",
    "Uttara Phalguni",
    "Hasta",
    "Chitra",
    "Swati",
    "Vishakha",
    "Anuradha",
    "Jyeshtha",
    "Mula",
    "Purva Ashadha",
    "Uttara Ashadha",
    "Shravana",
    "Dhanishta",
    "Shatabhisha",
    "Purva Bhadrapada",
    "Uttara Bhadrapada",
    "Revati"
  ];


  const date =
    new Date(
      `${person.dob}T${person.time}`
    );

  const seed =

    date.getDate() +
    date.getMonth() +
    date.getFullYear() +
    date.getHours() +
    date.getMinutes();

  return {

    rashi:
      (seed % 12) + 1,

    nakshatra:
      nakshatras[
        seed % 27
      ]
  };
};


// ❤️ Match Kundli

export const matchKundli =
  async (req, res) => {

    try {

      const { boy, girl } = req.body;


      // 🌟 Dynamic Astro Data

      const boyData =
        generateAstroData(boy);

      const girlData =
        generateAstroData(girl);


      // 🔥 Real Matching

      const result =
        calculateGunMilan(
          boyData,
          girlData
        );


      res.json({

        success: true,

        boy: boyData,

        girl: girlData,

        result
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({

        success: false,

        message:
          "Error generating kundli milan"
      });
    }
  };