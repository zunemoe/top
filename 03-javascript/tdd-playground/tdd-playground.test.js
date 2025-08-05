const tdd = require('./tdd-playground');

// Tests for the capitalize function
test('Capitalize first letter of each word', () => {
    const input = 'hello world';
    const expected = 'Hello World';
    const result = tdd.capitalize(input);

    expect(result).toBe(expected);
});

test('Capitalize with mixed case input', () => {
    const input = 'hElLo wOrLd';
    const expected = 'Hello World';
    const result = tdd.capitalize(input);

    expect(result).toBe(expected);
});

test('Capitalize with single word', () => {
    const input = 'javascript';
    const expected = 'Javascript';
    const result = tdd.capitalize(input);

    expect(result).toBe(expected);
});

test('Capitalize with empty string', () => {
    const input = '';
    const expected = '';
    const result = tdd.capitalize(input);

    expect(result).toBe(expected);
});

test('Capitalize with leading and trailing spaces', () => {
    const input = '  leading and trailing  ';
    const expected = '  Leading And Trailing  ';
    const result = tdd.capitalize(input);

    expect(result).toBe(expected);
});

test('Capitalize with special characters', () => {
    const input = 'hello-world! this is a test.';
    const expected = 'Hello-World! This Is A Test.';
    const result = tdd.capitalize(input);

    expect(result).toBe(expected);
});

test('Capitalize with numbers', () => {
    const input = '123 hello world 456';
    const expected = '123 Hello World 456';
    const result = tdd.capitalize(input);

    expect(result).toBe(expected);
});

test('Capitalize with non-alphabetic characters', () => {
    const input = 'hello @world #test';
    const expected = 'Hello @World #Test';
    const result = tdd.capitalize(input);

    expect(result).toBe(expected);
});

// Tests for the reverseStiring function
test('Reverse string with regular characters', () => {
    const input = 'hello';
    const expected = 'olleh';
    const result = tdd.reverseString(input);

    expect(result).toBe(expected);
});

test('Reverse string with mixed case', () => {
    const input = 'HeLLo';
    const expected = 'oLLeH';
    const result = tdd.reverseString(input);

    expect(result).toBe(expected);
});

test('Reverse string with spaces', () => {
    const input = 'hello world';
    const expected = 'dlrow olleh';
    const result = tdd.reverseString(input);

    expect(result).toBe(expected);
});

test('Reverse string with special characters', () => {
    const input = 'hello!@#';
    const expected = '#@!olleh';
    const result = tdd.reverseString(input);
   
    expect(result).toBe(expected);
});

test('Reverse empty string', () => {
    const input = '';
    const expected = '';
    const result = tdd.reverseString(input);

    expect(result).toBe(expected);
});

test('Reverse string with numbers', () => {
    const input = '12345';
    const expected = '54321';
    const result = tdd.reverseString(input);

    expect(result).toBe(expected);
});

test('Reverse string with unicode characters', () => {
    const input = 'こんにちは'; // "Hello" in Japanese
    const expected = 'はちにんこ'; // Reversed
    const result = tdd.reverseString(input);

    expect(result).toBe(expected);
});

// Tests for the calculator functions
test('Add two numbers', () => {
    const calc = tdd.calculator();
    const result = calc.add(2, 3);

    expect(result).toBe(5);
});

test('Subtract two numbers', () => {
    const calc = tdd.calculator();
    const result = calc.subtract(5, 3);

    expect(result).toBe(2);
});

test('Multiply two numbers', () => {
    const calc = tdd.calculator();
    const result = calc.multiply(2, 3);

    expect(result).toBe(6);
});

test('Divide two numbers', () => {
    const calc = tdd.calculator();
    const result = calc.divide(6, 3);

    expect(result).toBe(2);
});

test('Add negative numbers', () => {
    const calc = tdd.calculator();
    const result = calc.add(-2, -3);

    expect(result).toBe(-5);
});

test('Subtract negative numbers', () => {
    const calc = tdd.calculator();
    const result = calc.subtract(-5, -3);

    expect(result).toBe(-2);
});

test('Multiply by zero', () => {
    const calc = tdd.calculator();
    const result = calc.multiply(5, 0);

    expect(result).toBe(0);
});

test('Divide by zero', () => {
    const calc = tdd.calculator();
    expect(() => calc.divide(5, 0)).toThrow('Cannot divide by zero');
});

test('Divide by negative number', () => {
    const calc = tdd.calculator();
    const result = calc.divide(6, -3);

    expect(result).toBe(-2);
});

test('Add floating point numbers', () => {
    const calc = tdd.calculator();
    const result = calc.add(2.5, 3.5);

    expect(result).toBe(6);
});

test('Subtract floating point numbers', () => {
    const calc = tdd.calculator();
    const result = calc.subtract(5.5, 3.5);

    expect(result).toBe(2);
});

test('Multiply floating point numbers', () => {
    const calc = tdd.calculator();
    const result = calc.multiply(2.5, 3.5);

    expect(result).toBeCloseTo(8.75);
});

test('Divide floating point numbers', () => {
    const calc = tdd.calculator();
    const result = calc.divide(7.5, 2.5);

    expect(result).toBe(3);
});

test('Add large numbers', () => {
    const calc = tdd.calculator();
    const result = calc.add(1000000, 2000000);

    expect(result).toBe(3000000);
});

test('Subtract large numbers', () => {
    const calc = tdd.calculator();
    const result = calc.subtract(2000000, 1000000);

    expect(result).toBe(1000000);
});

test('Multiply large numbers', () => {
    const calc = tdd.calculator();
    const result = calc.multiply(1000, 2000);

    expect(result).toBe(2000000);
});

test('Divide large numbers', () => {
    const calc = tdd.calculator();
    const result = calc.divide(2000000, 1000);

    expect(result).toBe(2000);
});

// Tests for caesarCipher function
test('Caesar cipher with positive shift', () => {
    const input = 'abc';
    const shift = 2;
    const expected = 'cde';
    const result = tdd.caesarCipher(input, shift);
    expect(result).toBe(expected);
});

test('Caesar cipher with negative shift', () => {
    const input = 'abc';
    const shift = -2;
    const expected = 'yza';
    const result = tdd.caesarCipher(input, shift);
    expect(result).toBe(expected);
});

test('Caesar cipher with wrap-around', () => {
    const input = 'xyz';
    const shift = 3;
    const expected = 'abc';
    const result = tdd.caesarCipher(input, shift);
    expect(result).toBe(expected);
});

test('Caesar cipher with mixed case', () => {
    const input = 'AbC';
    const shift = 1;
    const expected = 'BcD';
    const result = tdd.caesarCipher(input, shift);
    expect(result).toBe(expected);
});

test('Caesar cipher with special characters', () => {
    const input = 'abc!@#';
    const shift = 2;
    const expected = 'cde!@#';
    const result = tdd.caesarCipher(input, shift);
    expect(result).toBe(expected);
});

test('Caesar cipher with empty string', () => {
    const input = '';
    const shift = 3;
    const expected = '';
    const result = tdd.caesarCipher(input, shift);
    expect(result).toBe(expected);
});

test('Caesar cipher with full alphabet', () => {
    const input = 'abcdefghijklmnopqrstuvwxyz';
    const shift = 1;
    const expected = 'bcdefghijklmnopqrstuvwxyza';
    const result = tdd.caesarCipher(input, shift);
    expect(result).toBe(expected);
});

test('Caesar cipher with large shift', () => {
    const input = 'abc';
    const shift = 28; // Equivalent to a shift of 2
    const expected = 'cde';
    const result = tdd.caesarCipher(input, shift);
    expect(result).toBe(expected);
});

test('Caesar cipher with negative large shift', () => {
    const input = 'abc';
    const shift = -28; // Equivalent to a shift of -2
    const expected = 'yza';
    const result = tdd.caesarCipher(input, shift);
    expect(result).toBe(expected);
});

test('Caesar cipher with non-alphabetic characters', () => {
    const input = '12345';
    const shift = 2;
    const expected = '12345'; // Non-alphabetic characters should remain unchanged
    const result = tdd.caesarCipher(input, shift);
    expect(result).toBe(expected);
});

// Tests for analyzeArray function
test('Analyze array with positive numbers', () => {
    const input = [1, 2, 3, 4, 5];
    const expected = { average: 3, min: 1, max: 5, length: 5 };
    const result = tdd.analyzeArray(input);
    expect(result).toEqual(expected);
});

test('Analyze array with negative numbers', () => {
    const input = [-1, -2, -3, -4, -5];
    const expected = { average: -3, min: -5, max: -1, length: 5 };
    const result = tdd.analyzeArray(input);
    expect(result).toEqual(expected);
});

test('Analyze array with mixed numbers', () => {
    const input = [-1, 0, 1, 2, 3];
    const expected = { average: 1, min: -1, max: 3, length: 5 };
    const result = tdd.analyzeArray(input);
    expect(result).toEqual(expected);
});

test('Analyze array with floating point numbers', () => {
    const input = [1.5, 2.5, 3.5];
    const expected = { average: 2.5, min: 1.5, max: 3.5, length: 3 };
    const result = tdd.analyzeArray(input);
    expect(result).toEqual(expected);
});

test('Analyze empty array', () => {
    const input = [];
    const expected = null;
    const result = tdd.analyzeArray(input);
    expect(result).toBe(expected);
});

test('Analyze array with single element', () => {
    const input = [42];
    const expected = { average: 42, min: 42, max: 42, length: 1 };
    const result = tdd.analyzeArray(input);
    expect(result).toEqual(expected);
});

test('Analyze array with all elements the same', () => {
    const input = [5, 5, 5, 5];
    const expected = { average: 5, min: 5, max: 5, length: 4 };
    const result = tdd.analyzeArray(input);
    expect(result).toEqual(expected);
});

test('Analyze array with large numbers', () => {
    const input = [1000000, 2000000, 3000000];
    const expected = { average: 2000000, min: 1000000, max: 3000000, length: 3 };
    const result = tdd.analyzeArray(input);
    expect(result).toEqual(expected);
});

test('Analyze array with non-numeric values', () => {
    const input = [1, 'two', 3];
    const expected = null; // Non-numeric values should return null
    const result = tdd.analyzeArray(input);
    expect(result).toBe(expected);
});
