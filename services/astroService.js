import swisseph from "swisseph";

export const calculateKundli = (date, time, latitude, longitude) => {

  const [year, month, day] = date.split("-").map(Number);
  const [hour, minute] = time.split(":").map(Number);

  const julDay = swisseph.swe_julday(
    year,
    month,
    day,
    hour + minute / 60,
    swisseph.SE_GREG_CAL
  );

  // Sun position
  const sun = swisseph.swe_calc_ut(
    julDay,
    swisseph.SE_SUN,
    swisseph.SEFLG_SWIEPH
  );

  const moon = swisseph.swe_calc_ut(
    julDay,
    swisseph.SE_MOON,
    swisseph.SEFLG_SWIEPH
  );

  return {
    sunLongitude: sun.longitude,
    moonLongitude: moon.longitude
  };
};