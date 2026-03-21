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

### Understanding TypeScript Code:

Now it's time to write some TypeScript code! The key difference between TypeScript and JavaScript is the ability to **add type annotations** to your variables.

A type annotation tells TypeScript exactly what kind of data a variable should hold. The syntax is simple: you add a colon followed by the type name after the variable name (which is similar to **type hinting in Python**).

#### Declaring Variables Syntax:

```
let variableName: type = value;
```

For example, to create a variable that can only hold text (strings), you would write:

```ts
let message: string = "Hello, World!";
```

##### Breakdown:

- `let`: Used to initialize a variable for the first time. You can also use `var` and `const`, but each serve a specific purpose of usage.
- `: string`: This is the part that should include a data type for the type annotation to work, explicitly telling TypeScript that `message` should only contain string values. If you try to assign a number or any other type to this variable later, TypeScript will catch the error before your code runs.

This will facilitate makings of any program, all thanks to the explicit typing. Transforming TypeScript into a powerful tool for catching bugs early and making your code more predictable.

### Compilation Process & Errors:

**Compilation process** is when your TypeScript files (`.ts`) are converted into plain JavaScript files (`.js`) that can be executed.

During this compilation, TypeScript's **type checker** analyzes your code and identifies potential problems before the code ever runs. This is one of TypeScript's most powerful features - catching errors at compile time rather than runtime.

#### Example of a Type Mismatch Error:

```ts
// This TypeScript code has a type error
let age: number = "25"; // Error: Type 'string' is not assignable to type 'number'
```

When TypeScript encounters a type mismatch like this, it will show you an error message at your IDE or during compilation. The error tells your exactly what's wrong: you've declared `age` as a number, but your're trying to assign it a string value.

Even when there are type errors, TypeScript will still generate JavaScript code (unless configured otherwise), but the errors serve as warnings that your code might not behave as expected. Fixing these errors ensures your program runs correctly and maintains type safety.

## Core Types:

### Basic Types: string, number and boolean

TypeScript has three fundamental **primitive types** that form the building blocks of most applications: `string`, `number` and `boolean`. These types allow you to enforce what kind of data your variables can hold.

#### The String Type:

The `string` type is used for text data. You can declare a string variable like this:

```ts
let productName: string = "Laptop";
```

#### The Number Type:

The `number` type handles all numeric values in TypeScript - both integers and decimals:

```ts
let price: number = 999.99;
```

#### The Boolean Type:

The `boolean` type represents either `true` or `false` values, perfect for flags and conditions:

```ts
let inStock: boolean = true;
```

### The 'any' Type: Escape Hatch

Sometimes you need to work with data where you don't know the exact type in advance, or you're migrating JavaScript code to TypeScript gradually. For these situations, TypeScript provides the `any` type - your **escape hatch** from type checking.

The `any` type allows a variable to hold any value and disables TypeScript's type checking for that variable.

#### Basic Syntax:

```ts
let data: any = 42;
data = "Hello";     // No error
data = true;        // No error
data.foo.bar.baz;   // No error (even though this might crash at runtime)
```

