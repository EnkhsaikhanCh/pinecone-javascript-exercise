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

  // #1 --------------------------
  // * * * * *
  // * * * * *
  // * * * * *
  // * * * * *
  // * * * * *
  for (let k = 0; k < num; k++) {
    for (let i = 0; i < num; i++) {
      result = result + "* ";
    }
    result = result + "\n";
  }
  result = result + "\n";

  // #2 --------------------------
  // * * * * *
  // * * * * *
  // * * + * *
  // * * * * *
  // * * * * *
  for (let k = 0; k < num; k++) {
    for (let i = 0; i < num; i++) {
      if (i == 2 && k == 2) {
        result = result + "+ ";
      } else {
        result = result + "* ";
      }
    }
    result = result + "\n";
  }
  result = result + "\n";

  // #3 -------------------------------
  // * * + * *
  // * * + * *
  // * * + * *
  // * * + * *
  // * * + * *
  result = result + "\n";
  for (let k = 0; k < num; k++) {
    for (let i = 0; i < num; i++) {
      if (i == 2) {
        result = result + "+ ";
      } else {
        result = result + "* ";
      }
    }
    result = result + "\n";
  }
  result = result + "\n";

  // #4 ----------------------------------
  // * * * * *
  // * * * * *
  // + + + + +
  // * * * * *
  // * * * * *
  result = result + "\n";
  for (let k = 0; k < num; k++) {
    for (let i = 0; i < num; i++) {
      if (k == 2) {
        result = result + "+ ";
      } else {
        result = result + "* ";
      }
    }
    result = result + "\n";
  }

  // #5 ----------------------------------
  // * * + * *
  // * * + * *
  // + + + + +
  // * * + * *
  // * * + * *
  result = result + "\n";
  for (let k = 0; k < num; k++) {
    for (let i = 0; i < num; i++) {
      if (k == 2 || i == 2) {
        result = result + "+ ";
      } else {
        result = result + "* ";
      }
    }
    result = result + "\n";
  }
  outputElement(result);
}
