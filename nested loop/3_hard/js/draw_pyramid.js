function getInputNumber(){
    const input = document.getElementById("orolt").value;
    return Number(input)
}

function displayOutput(text){
    const outputElement = document.getElementById("garalt");
    outputElement.innerText = text;
}

function doSomething(){
    const num = getInputNumber();
    let result = ""

    let r1 = [1];
    let r2 = [1, 1];
    let r3 = [1, 2, 1];
    let r4 = [1, 3, 3, 1];
    let r5 = [r4[0], r4[0] + r4[1], r4[1]+ r4[2], r4[3], r4[3]];

    let prev = [1];

    for(let i= 0; i<num; i++){
        const current= [];
        for (let k= 0; k < i + 1; k++){
            result = result + "* "
        }
        result = result + "\n"
    }

    displayOutput(result)
}