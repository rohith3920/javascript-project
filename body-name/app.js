let results = document.querySelector("#result");
let diabledValue = document.querySelector("#disabled-btn");
let buttons = document.querySelector("#btn");
let heights = document.querySelector("#height");
let weights = document.querySelector("#weight");


function calculate() {
  const heightValue = heights.value / 100;
  const weightValue = weights.value;
  let resultValues = weightValue / (heightValue * heightValue);
  diabledValue.value = resultValues;

  if (resultValues < 18.5) {
    results.textContent = "Under weight";
  } else if (resultValues >= 18.5 && resultValues <= 24.9) {
    results.textContent = "Normal weight";
  } else if (resultValues >= 25 && resultValues <= 29.9) {
    results.textContent = "Overweight";
  } else if (resultValues >= 30) {
    results.textContent = "Obesity";
  }
}

buttons.addEventListener("click", calculate);
