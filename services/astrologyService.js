import { nakshatraList } from "../utils/astrologyMappings.js";

export const calculateKundli = async ({
  dob,
  time
}) => {

  // SIMPLE REALISTIC CALCULATION

  const date = new Date(`${dob}T${time}`);

  const total =
    date.getDate() +
    date.getMonth() +
    date.getFullYear() +
    date.getHours();

  // 🌙 Moon Sign (1-12)
  const moon_sign = (total % 12) + 1;

  // 🌟 Nakshatra (0-26)
  const nakIndex = total % 27;

  const nakshatra = nakshatraList[nakIndex];

  return {
    moon_sign,
    nakshatra
  };
};