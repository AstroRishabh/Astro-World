import { askAI } from "../services/groqService.js";

function getCurrentDasha(dashaList){

  const today = new Date();

  for(const dasha of dashaList){

    const start = new Date(dasha.start);
    const end = new Date(dasha.end);

    if(today >= start && today <= end){
      return dasha.planet;
    }

  }

  return "Unknown";
}

export const aiKundliAnalysis = async (req, res) => {

  try {

    const { question, kundli } = req.body;

    if (!kundli || kundli.error) {
      return res.status(400).json({
        answer: "Pehle Kundli generate karo."
      });
    }

    if (!kundli.planets) {
      return res.json({
        answer: "Kundli data missing"
      });
    }

    // Extract important kundli data
    const lagna = kundli.lagna?.sign;
    const planets = kundli.planets;
    const nakshatra = kundli.nakshatra?.nakshatra;
    const currentDasha = getCurrentDasha(kundli.dasha);

    // ONLY important data for AI
    const summary = {
      lagna,
      nakshatra,
      currentDasha,
      planets: {
        Sun: planets.Sun,
        Moon: planets.Moon,
        Mars: planets.Mars,
        Mercury: planets.Mercury,
        Jupiter: planets.Jupiter,
        Venus: planets.Venus,
        Saturn: planets.Saturn,
        Rahu: planets.Rahu,
        Ketu: planets.Ketu
      }
    };

    const prompt = `
You are a professional Vedic astrologer.

Birth Chart Summary:
${JSON.stringify(summary)}

User Question:
${question}

Rules:
- Answer in the same language as the user.
- Answer should be in a correct words and simple words.
- Proper read present date,time and year.
- Spellings and pronounciation must be correct
- Use Vedic astrology logic.
- Keep answer short (5 lines).
`;

    const aiResponse = await askAI(prompt);

    res.json({
      answer: aiResponse
    });
    console.log(aiResponse);

  } catch (error) {

    console.error("AI ERROR:", error);

    res.status(500).json({
      answer: "AI prediction failed"
    });

  }

};