let data = [
  {
    name: "john doe",
    height: 175,
    mass: 77,
    eye_color: "black",
    gender: "male",
    type: "human",
  },
  {
    name: "lucy henry",
    height: 95,
    mass: 60,
    eye_color: "blue",
    gender: "female",
    type: "human",
  },
  {
    name: "russel arnold",
    height: 85,
    mass: 110,
    eye_color: "black",
    gender: "male",
    type: "human",
  },
  {
    name: "morris johnson",
    height: 125,
    mass: 74,
    eye_color: "gray",
    gender: "male",
    type: "human",
  },
  {
    name: "tom latham",
    height: 115,
    mass: 54,
    eye_color: "brown",
    gender: "male",
    type: "human",
  },
];

//! FILTER METHOD
// 1. get data with mass greater than 70
const massGreaterThen70 = data.filter((each) => each.mass > 70);
// console.log("massGreaterThen70: ", massGreaterThen70.length, massGreaterThen70);

// 2. get data with height less than 100
const heightLessThen100 = data.filter((each) => each.height < 100);
// console.log("heightLessThen100: ", heightLessThen100.length, heightLessThen100);

// 3. get all male data
const allMales = data.filter((each) => each.gender === "male");
// console.log("allMales: ", allMales.length, allMales);

// 4. get all female data
const allFemales = data.filter((each) => each.gender === "female");
// console.log("allFemales: ", allFemales.length, allFemales);

//! MAP METHOD
// 1. get array of all names
const allNames = data.map((each) => each.name);
// console.log("allNames: ", allNames);

// 2. get array of all heights
const allHeights = data.map((each) => each.height);
// console.log("allHeights: ", allHeights);

// 3. get array of all objects with only name & height
const allNamesAndHeight = data.map((each) => ({
  name: each.name,
  height: each.height,
}));
// console.log("allNamesAndHeight: ", allNamesAndHeight);

// 4. get array of all first names
const allFirstNames = data.map((each) => each.name.split(" ")[0]);
// console.log("allFirstNames: ", allFirstNames);

//! SOME METHOD
// 1. is there at least one female person
const isFemale = data.some((each) => each.gender === "female");
// console.log("oneFemale: ", oneFemale);

// 2. is there at least one person with red eye color
const isRedEye = data.some((each) => each.eye_color === "red");
// console.log("isRedEye: ", isRedEye);

// 3. is there at least one person taller than 200
const tallerThan200 = data.some((each) => each.height > 200);
// console.log("tallerThan200: ", tallerThan200);

// 4. is there at least one person with mass less than 40
const lessThan40 = data.some((each) => each.mass < 40);
// console.log("lessThan40: ", lessThan40);

// 5. is there at least one person with gray eye color
const isGrayEye = data.some((each) => each.eye_color === "gray");
// console.log("isGrayEye: ", isGrayEye);

//! FILTER & EVERY METHOD
// 1. filter out the female person and check if all left are male
const cleanedUp = data
  .filter((each) => each.gender !== "female")
  .every((each) => each.gender === "male");
// console.log("cleanedUp: ", cleanedUp);

//! SORT METHOD
// 1. sort by mass
const byMass = data
  .sort((first, second) => first.mass > second.mass)
  .map((each) => each.mass);
// console.log("byMass: ", byMass);

// 2. sort by height desc order
const byHeight = data
  .sort((first, second) => first.height < second.height)
  .map((each) => each.height);
// console.log("byHeight: ", byHeight);

// 3. sort by name
const byName = data
  .sort((first, second) => first.name > second.name)
  .map((each) => each.name);
// console.log("byName: ", byName);

// 4. sort by gender
const byGender = data
  .sort((first, second) => first.gender > second.gender)
  .map((each) => each.gender);
// console.log("byGender: ", byGender);

//! REDUCE METHOD
// 1. get total mass of the array
const totalMass = data.reduce((acc, each) => {
  return acc + each.mass;
}, 0);
// console.log("totalMass: ", totalMass);

// 2. get total number of persons by eye color
const totalByEyeColor = data.reduce((acc, each) => {
  return {
    ...acc,
    [each.eye_color]: acc[each.eye_color] ? acc[each.eye_color] + 1 : 1,
  };
}, {});
// console.log("totalByEyeColor: ", totalByEyeColor);

// 3. get total number of characters in all person names
const totalCharsInName = data.reduce((acc, each) => {
  return {
    ...acc,
    ["Total chars in " + each.name]: each.name.length,
  };
}, {});
// console.log("totalCharsInName: ", totalCharsInName);

//! EVERY METHOD
// 1. does every person have blue eyes
const allHaveBlueEyes = data.every((each) => each.eye_color === "blue");
console.log("allHaveBlueEyes: ", allHaveBlueEyes);

// 2. does every person weigh below 40
const weighBelow40 = data.every((each) => each.mass < 40);
console.log("weighBelow40: ", weighBelow40);

// 3. is every person shorter than 200
const allShorterThan200 = data.every((each) => each.height < 200);
console.log("allShorterThan200: ", allShorterThan200);

// 4. is every person male
const allAreMale = data.every((each) => each.gender === "male");
console.log("allAreMale: ", allAreMale);
