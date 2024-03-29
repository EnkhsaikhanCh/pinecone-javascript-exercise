// Some data we can work with
const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katharine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];
console.log(inventors);

// Array.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
function born1500(inventor) {
  if (inventor.year >= 1500 && inventor.year <= 1599) {
    return true;
  } else {
    return false;
  }
}

const result = inventors.filter(born1500);
console.log(result);

// Array.map()
// 2. Give us an array of the inventors first and last names
function firstName(inventors) {
  return inventors.first;
}

function lastName(inventors) {
  return inventors.last;
}

const first = inventors.map(firstName);
const last = inventors.map(lastName);
console.log("fist name", first);
console.log("last name", last);

// Array.sort()
// 3. Sort the inventors by birthday, oldest to youngest
function birthdaySort(a, b) {
  return a.year - b.year;
}
const sort = inventors.slice().sort(birthdaySort);
console.log("sort by birthday:", sort);

// 4. Sort the inventors by years lived
function lifeTime(a, b) {
  let aAge = a.passed - a.year;
  let bAge = b.passed - b.year;

  return aAge - bAge;
}

const lifeTimeSort = inventors.slice().sort(lifeTime);
console.log(lifeTimeSort);
