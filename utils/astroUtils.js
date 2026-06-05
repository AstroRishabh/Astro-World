// 12 Rashi (30° each)
const RASHI_LIST = [
  "Aries","Taurus","Gemini","Cancer","Leo","Virgo",
  "Libra","Scorpio","Sagittarius","Capricorn","Aquarius","Pisces"
];

// 27 Nakshatra (13.33° each)
const NAKSHATRA_LIST = [
  "Ashwini","Bharani","Krittika","Rohini","Mrigashira","Ardra",
  "Punarvasu","Pushya","Ashlesha","Magha","Purva Phalguni",
  "Uttara Phalguni","Hasta","Chitra","Swati","Vishakha",
  "Anuradha","Jyeshtha","Mula","Purva Ashadha","Uttara Ashadha",
  "Shravana","Dhanishta","Shatabhisha","Purva Bhadrapada",
  "Uttara Bhadrapada","Revati"
];

export function getRashi(degree) {
  const index = Math.floor(degree / 30);
  return RASHI_LIST[index];
}

export function getNakshatra(degree) {
  const index = Math.floor(degree / (360 / 27));
  return NAKSHATRA_LIST[index];
}