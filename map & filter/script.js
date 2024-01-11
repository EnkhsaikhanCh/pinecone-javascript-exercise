// Map -------------------------
const numbers = [1, 2, 3, 4];

// Callback function
function MultByTwo(number) {
  let result = number * 2;
  return result;
}

// higher ordfer function
const newNumbers = numbers.map(MultByTwo);

console.log(numbers);
console.log(newNumbers);

// Filter -------------------------
const names = ["Bold", "Bat", "Saraa", "Ganbold", "Az", "Od"];

// Callback function
function longName(name) {
  if (name.length > 3) {
    return true;
  } else {
    return false;
  }
}

// higher ordfer function
const result = names.filter(longName);

console.log(result);
