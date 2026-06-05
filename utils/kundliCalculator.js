export default async function calculateKundli(data) {

  const planets = {
    Sun: { degree: 120 },
    Moon: { degree: 210 },
    Mars: { degree: 80 },
    Mercury: { degree: 150 },
    Jupiter: { degree: 300 },
    Venus: { degree: 250 },
    Saturn: { degree: 40 }
  };

  return {
    planets
  };

}