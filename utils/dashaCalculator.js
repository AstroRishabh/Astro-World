const dashaOrder = [
  "Ketu",
  "Venus",
  "Sun",
  "Moon",
  "Mars",
  "Rahu",
  "Jupiter",
  "Saturn",
  "Mercury"
];

const dashaYears = {
  Ketu:7,
  Venus:20,
  Sun:6,
  Moon:10,
  Mars:7,
  Rahu:18,
  Jupiter:16,
  Saturn:19,
  Mercury:17
};

export default function calculateMahadasha(moonLongitude, birthDate){

  const nakshatraSize = 13.3333;

  const nakshatraIndex = Math.floor(moonLongitude / nakshatraSize);

  const dashaLord = dashaOrder[nakshatraIndex % 9];

  const positionInNakshatra = moonLongitude % nakshatraSize;

  const remainingFraction =
    (nakshatraSize - positionInNakshatra) / nakshatraSize;

  const remainingYears =
    dashaYears[dashaLord] * remainingFraction;

  let startDate = new Date(birthDate);

  let dashaSequence = [];

  let index = dashaOrder.indexOf(dashaLord);

  for(let i=0;i<9;i++){

    let planet = dashaOrder[(index+i)%9];

    let years = dashaYears[planet];

    let endDate = new Date(startDate);

    endDate.setFullYear(
      endDate.getFullYear() + years
    );

    dashaSequence.push({
      planet,
      start:startDate,
      end:endDate
    });

    startDate = endDate;
  }

  return dashaSequence;
}