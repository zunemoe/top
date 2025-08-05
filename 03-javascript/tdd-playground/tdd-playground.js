function capitalize(str) {
    str = str.toLowerCase();
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

function calculator() {
    return {
        add: (a, b) => a + b,
        subtract: (a, b) => a - b,
        multiply: (a, b) => a * b,
        divide: (a, b) => {
            if (b === 0) {
                throw new Error("Cannot divide by zero");
            }
            return a / b;
        },
    };
}

function caesarCipher(str, shift) {
    return str.split('').map(char => {
        if (/[a-zA-Z]/.test(char)) {
            const code = char.charCodeAt(0);
            const base = char >= 'a' ? 97 : 65; // ASCII code for 'a' or 'A'
            return String.fromCharCode(((code - base + shift) % 26 + 26) % 26 + base);
        }
        return char;
    }).join('');
}

function analyzeArray(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return null;
    }
    
    // Check if all elements are numbers
    if (!arr.every(element => typeof element === 'number' && !isNaN(element))) {
        return null;
    }
    
    const sum = arr.reduce((acc, num) => acc + num, 0);
    const average = sum / arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return { average, min, max, length: arr.length };
}

module.exports = {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray,
};