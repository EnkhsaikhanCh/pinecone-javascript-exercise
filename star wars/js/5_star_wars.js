// ----*
// ---* *
// --*   *
// -*     *
// * * * * *

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

    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n - 1 - k; i++) {
            result = result + " ";
        }

        if (k == 0) {
            result = result + "* ";
        } else if (k == n - 1) {
            for (let i = 0; i < n; i++) {
                result = result + "* ";
            }
        } else {
            result = result + "* ";

            for (let i = 0; i < k - 1; i++) {
                result = result + "  ";
            }

            result = result + "* ";
        }

        result = result + "\n";
    }

    displayOutput(result);
}