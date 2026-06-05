// utils/gunMilan.js

const nadiMap = {
  Ashwini: "Aadi",
  Bharani: "Madhya",
  Krittika: "Antya",
};

const ganaMap = {
  Ashwini: "Dev",
  Bharani: "Manushya",
  Krittika: "Rakshas",
};

function nadiScore(n1, n2) {
  return nadiMap[n1] === nadiMap[n2] ? 0 : 8;
}

function bhakootScore(r1, r2) {
  const diff = Math.abs(r1 - r2);
  if ([6, 8, 12].includes(diff)) return 0;
  return 7;
}

function ganaScore(n1, n2) {
  const g1 = ganaMap[n1];
  const g2 = ganaMap[n2];

  if (g1 === g2) return 6;
  if (g1 === "Dev" && g2 === "Manushya") return 5;
  return 1;
}

function getCompatibility(score) {
  if (score >= 30) return "Excellent";
  if (score >= 24) return "Good";
  if (score >= 18) return "Average";
  return "Not Recommended";
}

function calculateGunMilan(d1, d2) {
  const nadi = nadiScore(d1.nakshatra, d2.nakshatra);
  const bhakoot = bhakootScore(d1.rashi, d2.rashi);
  const gana = ganaScore(d1.nakshatra, d2.nakshatra);

  const varna = 1;
  const vashya = 2;
  const tara = 2;
  const yoni = 3;
  const grahaMaitri = 4;

  const total =
    varna +
    vashya +
    tara +
    yoni +
    grahaMaitri +
    gana +
    bhakoot +
    nadi;

  return {
    total_guna: total,
    max_guna: 36,
    compatibility: getCompatibility(total),
    details: {
      varna,
      vashya,
      tara,
      yoni,
      graha_maitri: grahaMaitri,
      gana,
      bhakoot,
      nadi,
    },
  };
}

module.exports = { calculateGunMilan };