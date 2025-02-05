let display = document.querySelector("#display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
  isResultDisplayed = false; // Reset flag
}
// function clearDisplay(input) {
//   display.value = "";
// }

function calculate() {
  try {
      display.value = eval(display.value); // Calculate result
      isResultDisplayed = true; // Set flag after showing result
  } catch (error) {
      display.value = "Error";
      isResultDisplayed = true;
  }
}
// function calculate(input) {
//   try {
//     display.value = eval(display.value);
//   } catch (error) {
//     display.value = "Error";
//   }
// }

function clearLast() {
  if (display.value === "Error") {
    display.value = "";
  } else {
    display.value = display.value.slice(0, -1);
  }
}

function percentage(){
  display.value = display.value/100
}

function sq_rt(){
  display.value = Math.pow(display.value, 1/2)
}

let isResultDisplayed = false; // Flag to check if result is displayed

function appendToDisplay(value) {
    if (isResultDisplayed && !isNaN(value)) {
        display.value = value; // Replace display with new number
        isResultDisplayed = false; // Reset flag
    } else {
        display.value += value; // Append as usual
    }
}



