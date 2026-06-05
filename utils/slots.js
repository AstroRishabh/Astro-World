export const generateSlots = () => {

  const slots = [];

  let start = 10; // 10 AM
  let end = 18;   // 6 PM

  for(let i=start; i<end; i++){

    slots.push(`${i}:00`);
    slots.push(`${i}:30`);

  }

  return slots;

};