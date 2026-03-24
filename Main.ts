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

const greet = (name: string): string => `Hello, ${name}!`;

// console.log(multiply(2, 6));