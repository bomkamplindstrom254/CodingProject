// Assignment 1: Simple Calculator
function add(a: number, b: number): number {
    return a + b;
}

function subtract(a: number, b: number): number {
    return a - b;
}

function multiply(a: number, b: number): number {
    return a * b;
}

function divide(a: number, b: number): number | null {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

console.log(add(5, 3)); // Output: 8
console.log(subtract(10, 4)); // Output: 6

// Assignment 2: Bubble Sort Code
function bubbleSort(arr: number[]): number[] {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Assignment 3: Caesar Cipher Code
function caesarCipher(text: string, shift: number): string {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';

    for (let char of text) {
        if (alphabet.includes(char)) {
            result += alphabet[(alphabet.indexOf(char) + shift) % alphabet.length];
        } else {
            result += char;
        }
    }

    return result;
}

// Assignment 4: Find the Nth Fibonacci Number Code
function fibonacci(n: number): number | null {
    if (n <= 1) {
        return n;
    }
    let a = 0, b = 1;
    for (let i = 2; i < n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }

    return n === 1 ? a : fibonacci(n - 1);
}

console.log(fibonacci(9)); // Output: 34
