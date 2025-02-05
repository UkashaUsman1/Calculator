let display = document.querySelector("#display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay(input) {
  display.value = "";
}

function calculate(input) {
    try {
        display.value = eval(display.value)
    } catch (error) {
        display.value = "Error"
    }
}

function clearLast() {
    display.value = display.value.slice(0, -1);
}