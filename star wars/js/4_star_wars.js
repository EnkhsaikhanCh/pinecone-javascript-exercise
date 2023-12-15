// -------
//    *
//   * *
//  * * *
// * * * *

function getInputNumber() {
  const input = document.getElementById("orolt").value;
  return Number(input);
}

function outputElement(text) {
  const outputElement = document.getElementById("garalt");
  outputElement.innerText = text;
}

function doSomething() {
  const num = getInputNumber();
  let result = "";

  for (let k = 0; k < num; k++) {
    for (let i = 0; i < num - 1 - k; i++) {
      result = result + " ";
    }
    for (let i = 0; i < k + 1; i++) {
      result = result + "* ";
    }
    result = result + "\n";
  }
  outputElement(result);
}
