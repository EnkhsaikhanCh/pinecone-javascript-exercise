function getInputNumber() {
  const input = document.getElementById("orolt").value;
  return Number(input);
}

function displayOutput(text) {
  const outputElement = document.getElementById("garalt");
  outputElement.innerText = text;
}

function doSomething() {
  const n = getInputNumber();
  let result = "";

  for (let i = 0; i < n; i++) {
    result = result + "* ";
  }
  result = result + "\n";

  for (let k = 0; k < n - 2; k++) {
    for (let i = 0; i < n; i++) {
      if (i == 0 || i == n - 1) {
        result = result + "* ";
      } else {
        result = result + "  ";
      }
    }
    result = result + "\n";
  }

  for (let i = 0; i < n; i++) {
    result = result + "* ";
  }

  displayOutput(result);
}
