// Get #display element from the DOM
const display = document.querySelector("#display");
clearDisplay();

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

function clearDisplay() {
    display.value = "0";
}

// Get button elements from the DOM with the class "button"
const buttons = document.querySelectorAll(".button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        console.log(`Button clicked: ${button.textContent}`);
        if (button.textContent === "C") {
            clearDisplay();
        } else if (button.textContent === "←") {
            // Remove the last character from the display
            display.value = display.value.slice(0, -1);
        } else if (button.textContent === "=") {
            // Evaluate the expression in the display
        } else {
            /*
            if the display is "0", replace it with the button text (only for numbers and operator -). 
            if the number is 0 do not replace it
            if it is . do not replace 0
            if operator is /, *, + do not replace 0
            if operator is at the end of the display when evaluating the expression, 
            ignore the operator and evaluate the expression. 
            Show the result and remaining operator in the display
            */
                     
            if (display.value === "0" && !isNaN(button.textContent)) {
                display.value = button.textContent;
            }
            display.value += button.textContent;
        }
    });
});

