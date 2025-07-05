// Get #display element from the DOM
const display = document.querySelector("#display");
clearDisplay();

const Calculator = {
    add: (a,b) => a + b,
    subtract: (a,b) => a - b,
    multiply: (a,b) => a * b,
    divide: (a,b) => {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    }
}

const { add, subtract, multiply, divide } = Calculator;

function clearDisplay() {
    display.value = "0";
}

function evaluateExpression(expression) {
    try {
        const tokens = parseExpression(expression);
        console.log("Tokens:", tokens);
        const result = calculateWithPrecedence(tokens);
        display.value = result.toString();
    } catch (error) {
        display.value = "Error";
        console.error("Calculation error:", error.message);
    }
    
}

function calculateWithPrecedence(tokens) {
    let workingTokens = [...tokens];

    for (let i = 1; i < workingTokens.length; i += 2) {
        const operator = workingTokens[i];

        if (operator === '*' || operator === '/') {
            const leftOperand = workingTokens[i - 1];
            const rightOperand = workingTokens[i + 1];
            let result;

            if (operator === '*') {
                result = multiply(leftOperand, rightOperand);
            }
            else if (operator === '/') {
                result = divide(leftOperand, rightOperand);
            }

            workingTokens.splice(i - 1, 3, result); // Replace left, operator, right with result
            i -= 2; // Adjust index to account for removed elements
        }
    }

    for (let i = 1; i < workingTokens.length; i += 2) {
        const operator = workingTokens[i];

        if (operator === '+' || operator === '-') {
            const leftOperand = workingTokens[i - 1];
            const rightOperand = workingTokens[i + 1];
            let result;

            if (operator === '+') {
                result = add(leftOperand, rightOperand);
            }
            else if (operator === '-') {
                result = subtract(leftOperand, rightOperand);
            }

            workingTokens.splice(i - 1, 3, result); // Replace left, operator, right with result
            i -= 2; // Adjust index to account for removed elements
        }
    }

    if (workingTokens.length !== 1) {
        throw new Error("Invalid expression");
    }
    return workingTokens[0]; // Return the final result
}


function parseExpression(expression) {
    // Split the expression into numbers and operators and return them as an array
    expression = expression.replace(/\s+/g, ""); // Remove whitespace
    
    const tokens = [];
    let currentNumber = "";

    for (let i = 0; i < expression.length; i++) {
        const char = expression[i];

        if (!isNaN(char) || char === '.') {
            currentNumber += char; // Build the number
        }
        else if (['+', '-', '*', '/'].includes(char)) {
            if (currentNumber !== '') {
                tokens.push(parseFloat(currentNumber)); // Push the number to tokens
                currentNumber = ""; // Reset current number
            }
            tokens.push(char); // Push the operator to tokens
        }
    }
    if (currentNumber !== '') {
        tokens.push(parseFloat(currentNumber)); // Push the last number if exists
    }
    return tokens;
}

// Get button elements from the DOM with the class "button"
const buttons = document.querySelectorAll(".button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        console.log("Class button clicked:", button.className);
        console.log(`Button clicked: ${button.textContent}`);
        handleInput(button.textContent);
    });
});

document.addEventListener("keydown", (event) => {
    const key = event.key;
    console.log("Key pressed:", key);
    handleInput(key);
});

function handleInput(key) {
    // Handle special keys first
    if (key === "Enter" || key === "=") {
        evaluateExpression(display.value);
        return;
    }
    
    if (key === "Escape" || key.toLowerCase() === "c") {
        clearDisplay();
        return;
    }
    
    if (key === "Backspace" || key === "←" || key === "Delete") {
        display.value = display.value.slice(0, -1);
        if (display.value === "") {
            display.value = "0";
        }
        return;
    }

    // Handle display value updates
    if (!isNaN(key) && key !== " ") {
        updateDisplay(key);
    } else if (["+", "-", "*", "/"].includes(key)) {
        updateDisplay(key);
    } else if (key === ".") {
        updateDisplay(key);
    } else {
        console.log("Unsupported key:", key);
    }
}

function updateDisplay(key) {
    // Replace "0" with numbers or minus sign
    if ((display.value === "0" && !isNaN(key)) || 
        (display.value === "0" && key === "-")) {
        display.value = key;
        return;
    }
    
    // Replace last operator with new operator
    if ((display.value.endsWith("+") || 
         display.value.endsWith("-") || 
         display.value.endsWith("*") || 
         display.value.endsWith("/")) && 
        ["+", "-", "*", "/"].includes(key)) {
        display.value = display.value.slice(0, -1) + key;
        return;
    }

    // Prevent multiple decimal points in the same number
    if (key === ".") {
        // Get the current number being typed (after the last operator)
        const lastOperatorIndex = Math.max(
            display.value.lastIndexOf("+"),
            display.value.lastIndexOf("-"),
            display.value.lastIndexOf("*"),
            display.value.lastIndexOf("/")
        );
        
        const currentNumber = display.value.substring(lastOperatorIndex + 1);
        
        // If current number already has a decimal point, don't add another
        if (currentNumber.includes(".")) {
            return;
        }
    }

    
    // Append the key to display
    display.value += key;
}