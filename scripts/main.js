console.log("Hello world");
alert("Hello alert");
console.log(34 + 456 * 5);

let x = 5;
let y = 10;
const z = 10;

x = 5;
y = 7;

console.log(6 * x);
console.log(y);
console.log(z);

console.log(6 < 7);
console.log(10 < 7);

console.log(y == 70);
console.log(y !== 70);

const age = 17;

if (age > 18) {
  console.log("you can drive");
} else {
  console.log("no, you cannot drive");
}

// Exercise - 1
const a = 234;
const b = 86;
const c = 86;
const d = 734;

let sum = 0;

if (a > 80) {
  sum = sum + a;
}

if (b > 80) {
  sum = sum + b;
}

if (c > 80) {
  sum = sum + c;
}

if (d > 80) {
  sum = sum + d;
}

console.log(sum);
