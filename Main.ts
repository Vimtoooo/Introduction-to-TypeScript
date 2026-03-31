// Without type annotation:
// let message = "Hi";

// // With type annotation:
// let message2: string = "My Message";

// // Making an array
// let myArray: string[] = ["hello", "world", "!"];

// // Making a tuple
// const myTuple: [boolean, string] = [true, "Valid"];

// // Arrow Functions:
// const multiply = (a: number, b: number): number => {
//   return a * b;
// };

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
// function greet(name: string, greeting: string = "Hello"): string {
//   return greeting + ", " + name;
// }

// function calculateArea(width: number, height = 10): number {
//   return width * height;
// }

// // Create the sumAll function with rest parameters
// function sumAll(...numbers: number[]): number {
//     let total: number = 0;
//     for (let num of numbers) { total += num; }
//     return total;
// }

// // Create the findMaximum function with rest parameters
// function findMaximum(...numbers: number[]): number | undefined {
//     let highest: number | undefined;
//     for (let num of numbers) {
//         if (typeof highest === "undefined" || num > highest) highest = num;
//     }
//     return highest;
// }

// // Dealing with Union types:
// // Create the concatenateStrings function with separator and rest parameters
// function concatenateStrings(separator: string, ...texts: string[]): string {
//     return texts.join(separator);
// }

// const firstInput: string = '["cat","dog"]';
// const secondInput: string = "25";

// // TODO: Write your code here
// // Create the processData function with type guard
// function processData(input: string | string[]): number {
//     if (typeof input === "string") return input.length;
//     return input.join("").length;
// };
// // Create the formatMessage function with type guard
// function formatMessage(content: number | boolean): string {
//     if (typeof content === "number") return `Value: ${content}`;
//     return `Status: ${content}`;
// };
// console.log(JSON.stringify(["hello", "world"]))
// // Process the inputs according to the requirements
// // Call the functions and print the results
// let input1: string | string[] = firstInput.startsWith('[') ? JSON.parse(firstInput) : firstInput;
// console.log(processData(input1))
// let input2: number | boolean = ["true", "false"].includes(secondInput) ? Boolean(secondInput) : Number(secondInput);
// console.log(formatMessage(input2))

// Interfaces:
interface Animal {
    name: string,
    age: number,
    species?: string
};

// Inheritance with Interfaces:
interface Cat extends Animal {
    hasNineLives: boolean
};

const myPet: Cat = {
    name: "Bob",
    age: 3,
    species: "Persian",
    hasNineLives: false
};

console.log(myPet.name)