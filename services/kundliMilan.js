export const calculateGunMilan =
  (boy, girl) => {

    const report = [];


    // 🌟 Varna

    const varna =
      boy.rashi === girl.rashi
        ? 1
        : 0;

    report.push({
      guna: "Varna",
      score: varna,
      max: 1
    });


    // 🌟 Vashya

    const vashya =
      Math.abs(
        boy.rashi -
        girl.rashi
      ) <= 2
        ? 2
        : 1;

    report.push({
      guna: "Vashya",
      score: vashya,
      max: 2
    });


    // 🌟 Tara

    const taraDiff =
      Math.abs(

        boy.rashi -
        girl.rashi

      ) % 9;

    const tara =
      taraDiff < 5
        ? 3
        : 1;

    report.push({
      guna: "Tara",
      score: tara,
      max: 3
    });


    // 🌟 Yoni

    const yoni =
      boy.nakshatra ===
      girl.nakshatra
        ? 4
        : 2;

    report.push({
      guna: "Yoni",
      score: yoni,
      max: 4
    });


    // 🌟 Graha Maitri

    const maitri =
      boy.rashi % 2 ===
      girl.rashi % 2
        ? 5
        : 3;

    report.push({
      guna: "Graha Maitri",
      score: maitri,
      max: 5
    });


    // 🌟 Gana

    const gana =
      boy.rashi === girl.rashi
        ? 6
        : 4;

    report.push({
      guna: "Gana",
      score: gana,
      max: 6
    });


    // 🌟 Bhakoot

    const diff =
      Math.abs(
        boy.rashi -
        girl.rashi
      );

    const bhakoot =
      diff === 6 || diff === 8
        ? 0
        : 7;

    report.push({
      guna: "Bhakoot",
      score: bhakoot,
      max: 7
    });


    // 🌟 Nadi

    const nadi =
      boy.nakshatra ===
      girl.nakshatra
        ? 0
        : 8;

    report.push({
      guna: "Nadi",
      score: nadi,
      max: 8
    });


    // 🔢 TOTAL

    const total_guna =

      report.reduce(
        (sum, item) =>
          sum + item.score,
        0
      );


    let compatibility =
      "Poor ❌";

    if (total_guna >= 30)
      compatibility =
        "Excellent ❤️";

    else if (total_guna >= 24)
      compatibility =
        "Good ✅";

    else if (total_guna >= 18)
      compatibility =
        "Average ⚠️";


    return {

      total_guna,

      max_guna: 36,

      compatibility,

      report
    };
  };