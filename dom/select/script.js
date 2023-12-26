// 1. Use getElementById to select an element by ID
const myDiv = document.getElementById("myDiv");
console.log(myDiv);
// 2. Use getElementsByName to select elements by name
const username = document.getElementsByName("username");
console.log(username);
// 3. Use getElementsByTagName to select elements by tag name
const tagName = document.getElementsByTagName("li");
console.log(tagName);
// 4. Use getElementsByClassName to select elements by class name
const nameOutput = document.getElementsByClassName("nameOutput");
console.log(nameOutput);

// ----
function nameSubmit() {
  let name = document.getElementById("username").value;
  let result = name;
  document.getElementById("garalt").innerText = result;
}
