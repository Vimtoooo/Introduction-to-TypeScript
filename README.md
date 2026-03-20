# Introduction to TypeScript:

## Getting Started with TypeScript:

### What is TypeScript?

TypeScript is a **programming language developed by Microsoft** that <i>builds on JavaScript</i> by adding **static types**. Think of it as JavaScript with an extra layer of safety and tooling.

The key concept to understand is that TypeScript is a **superset** of JavaScript, meaning that any valid JavaScript code is also valid TypeScript code. You can take any existing JavaScript file, rename it from `.js` to `.ts`, and it will work in TypeScript!

#### Why Should I use TypeScript?

Well, the reason that makes TypeScript unique is that it adds **type annotations** on top of JavaScript, and these annotations allow you to specify what kind of data your variables should hold and store, whether they're strings, numbers, objects, or other types. This helps catch potential errors before your code even runs.

#### Simple Example of TypeScript Syntax:

Here, we can compare what is valid in JavaScript and what is also valid in TypeScript.

```ts
// JavaScript (also valid TypeScript)
let message = "Hello World";

// TypeScript with type annotation (but you can't declare types in JavaScript!)
let message: string = "Hello World";
```

#### Summary:

TypeScript provides better development tools, improved code readability, and helps prevent common programming mistakes that might otherwise only be discovered when your applications is running!

### Why Use TypeScript?

TypeScript offers three major benefits that make development safer and more efficient.

#### Catch Error Early:

TypeScript's static type checking catches errors during development, before your code runs, preventing bugs that might only surface when users interact with your application.

Here is an example of a JavaScript mistake:

```js
// JavaScript - this bug won't be caught until runtime
function calculateTotal(price, tax) {
    return price + tax;
}

calculateTotal("50", 0.1); // Returns "500.1" instead of 55!
```

With TypeScript, this error is caught immediately:

```ts
// TypeScript - error caught during development
function calculateTotal(price: number, tax: number): number {
    return price + tax;
}

calculateTotal("50", 0.1); // Error: Argument of type 'string' is not assignable to parameter of type 'number'
```

#### Better Code Readability:

Type annotations serve as documentation, making it clear what kind of data functions expect and return. This helps both you and your teammates understand code faster.

#### Enhanced Development Tools:

TypeScrip enables superior autocompletion, refactoring, and navigation in code editors. Your editor knows exactly what properties and methods are available on each variable.

