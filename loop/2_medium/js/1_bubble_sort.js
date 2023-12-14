function doSomething() {
  let input = Number(document.getElementById("orolt").value);
  input = input.replace("[", "");
  input = input.replace("]", "");
  let result = "";

  for (let i = 0; i <= num; i++) {
    console.log(i);
    result = result + " " + i;
  }
  document.getElementById("garalt").innerText = result;
}
