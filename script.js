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
        if(display.value == "Error"){
          console.log("h")
        }
    }
}

