let display = document.querySelector("#display");

let isResultDisplayed = false;

function appendToDisplay(input) {
  if (isResultDisplayed && !isNaN(input)) {
    display.value = input;
    isResultDisplayed = false;
  } else {
    display.value += input;
  }
}

function clearDisplay() {
  display.value = "";
  isResultDisplayed = false;
}

function calculate() {
  try {
    display.value = eval(display.value);
    isResultDisplayed = true;
  } catch (error) {
    display.value = "Error";
    isResultDisplayed = true;
  }
}

function clearLast() {
  if (display.value === "Error") {
    display.value = "";
  } else if (isResultDisplayed) {
    display.value = ""; 
    isResultDisplayed = false;
  } else {
    display.value = display.value.slice(0, -1);
  }
}

function percentage() {
  display.value = display.value / 100;
}

function sq_rt() {
  display.value = Math.pow(display.value, 1 / 2);
}
