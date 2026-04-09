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
// interface Animal {
//     name: string,
//     age: number,
//     species?: string
// };

// // Inheritance with Interfaces:
// interface Cat extends Animal {
//     hasNineLives: boolean
// };

// const myPet: Cat = {
//     name: "Bob",
//     age: 3,
//     species: "Persian",
//     hasNineLives: false
// };

// // console.log(myPet.name)

// interface User {
//     readonly id: number
// };

// const myUser: User = {
//     id: 1
// };

// myUser.id = 2 // Error: id is readonly and cannot be altered!

// Using Numeric Enums:

// enum UserRole {
//     Admin = "Admin",
//     Editor = "Editor",
//     Viewer = "Viewer"
// };

// const myRole: UserRole = UserRole.Admin;

// function processUser(role: UserRole): void {
//   if (role === UserRole.Admin) {
//     console.log("Full access granted");
//   } else if (role === UserRole.Editor) {
//     console.log("Edit access granted");
//   } else {
//     console.log("View access only");
//   }
// }

// processUser(myRole);

// Generics:
// function validateType<T>(value: T): string {
//     return typeof value;
// }

// // Storing results while calling generic functions:
// const result1 = validateType<string>("hello");
// const result2 = validateType(21);

// function findArrayValue<T>(array: Array<T>, index: number): T | undefined {
//     return array.at(index);
// }

// const myArray: Array<string> = ["A", "B", "C"];
// const foundValue: string | undefined = findArrayValue(myArray, 3);
// console.log(foundValue);

// interface User<T> {
//     username: string
//     data: T
// };

// const myUser: User<string> = {
//     username: "Vimto",
//     data: "Some data..."
// };

// Type Assertions:
const legacyLaptop = { uuid: 101, title: "MacBook Pro", price: "2500", available: 1 };
const legacyPhone = ["202", "iPhone 15", 999, true]; // Oh no, it's an array!
const unknownItem: unknown = '{"id": 303, "name": "Keychron K2", "price": 80, "inStock": true}';

interface Product {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
};

function hydrateProduct(source: unknown, type: 'object' | 'array' | 'json'): Product {

    type RawProduct = {
        id: string | number;
        name: string;
        price: string | number;
        available: boolean | number;
    };
    
    type LegacyObject = {
        uuid: number | string;
        title: string;
        price: number | string;
        available: boolean | number;
    };

    function cleanData(src: RawProduct | LegacyObject): Product {
        if ('id' in src) {
            return {
                id: typeof src.id === 'number' ? src.id : Number.parseInt(src.id),
                name: src.name,
                price: typeof src.price === 'number' ? src.price : Number.parseFloat(src.price),
                inStock: typeof src.available === 'boolean' ? src.available : Boolean(src.available)
            };
        } else {
            return {
                id: typeof src.uuid === 'number' ? src.uuid : Number.parseInt(src.uuid),
                name: src.title,
                price: typeof src.price === 'number' ? src.price : Number.parseFloat(src.price),
                inStock: typeof src.available === 'boolean' ? src.available : Boolean(src.available)
            };
        };
    };

    if (type === 'object') {
        const legacySource: LegacyObject = source as LegacyObject;
        return cleanData(legacySource);
    }

    else if (type === 'array') {
        const sourceArray: Array<string | number | boolean> = source as Array<string | number | boolean>;
        return cleanData({
            id: sourceArray.at(0) as (number | string),
            name: sourceArray.at(1) as string,
            price: sourceArray.at(2) as (string | number),
            available: sourceArray.at(3) as (boolean | number)
        });
    }

    else {
        const jsonSource: RawProduct = JSON.parse(source as string);
        return cleanData(jsonSource);
    };
};


// TEST CASES
console.log(hydrateProduct(legacyLaptop, 'object'));
console.log(hydrateProduct(legacyPhone, 'array'));
console.log(hydrateProduct(unknownItem, 'json'));

/* RESULTS:
{id: 101, name: 'MacBook Pro', price: 2500, inStock: true}
{id: 202, name: 'iPhone 15', price: 999, inStock: true}
{id: 303, name: 'Keychron K2', price: 80, inStock: false}
*/