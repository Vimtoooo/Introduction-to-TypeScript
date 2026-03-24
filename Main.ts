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
function greet(name: string, greeting?: string): string {
  if (greeting) {
    return greeting + ", " + name;
  }
  // console.log(greeting); // Undefined value
  return "Hello, " + name;
}

// console.log(greet("Jeff"));