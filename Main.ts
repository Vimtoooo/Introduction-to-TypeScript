// Without type annotation:
let message = "Hi";

// With type annotation:
let message2: string = "My Message";

// Making an array
let myArray: string[] = ["hello", "world", "!"];

// Making a tuple
const myTuple: [boolean, string] = [true, "Valid"];

// Arrow Functions:
const multiply = (a: number, b: number): number => {
  return a * b;
};

// const greet = (name: string): string => `Hello, ${name}!`;

// console.log(multiply(2, 6));

// Optional Parameters:
// function greet(name: string, greeting?: string): string {
//   if (greeting) {
//     return greeting + ", " + name;
//   }
//   // console.log(greeting); // Undefined value
//   return "Hello, " + name;
// }

// console.log(greet("Jeff"));

// Default Parameters
function greet(name: string, greeting: string = "Hello"): string {
  return greeting + ", " + name;
}

function calculateArea(width: number, height = 10): number {
  return width * height;
}

// Create the sumAll function with rest parameters
function sumAll(...numbers: number[]): number {
    let total: number = 0;
    for (let num of numbers) { total += num; }
    return total;
}

// Create the findMaximum function with rest parameters
function findMaximum(...numbers: number[]): number | undefined {
    let highest: number | undefined;
    for (let num of numbers) {
        if (typeof highest === "undefined" || num > highest) highest = num;
    }
    return highest;
}

// Create the concatenateStrings function with separator and rest parameters
function concatenateStrings(separator: string, ...texts: string[]): string {
    return texts.join(separator);
}