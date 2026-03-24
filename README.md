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

### The 'unknown' Type:

Like `any`, a variable of type `unknown` can hold any value!

The key difference is that TypeScript won't let you perform operations no an `unknown` value without first checking what type it actually is. This prevents many runtime errors:

#### Basic Syntax:

```ts
let userInput: unknown = "Hello";
userInput = 42;        // No error
userInput = true;      // No error
```

Validating the data type being stored inside the `unknown` variable type before any operation:

```ts
let data: unknown = "TypeScript";
// data.toUpperCase(); // Error! TypeScript doesn't know it's a string

// You must check the type first
if (typeof data === "string") {
    console.log(data.toUpperCase()); // Now it's safe!
}
```

This makes `unknown` much safer than `any` because it forces you to verify the type before using type-specific methods or properties.

### Working with 'null' and 'undefined':

The `undefined` type represents a variable that has been declared but not assigned a value, or a function that doesn't explicitly return anything. In the other hand, the `null` type represents an intentional absence of a value - it's explicitly assigned to indicate "no value".

#### Basic Syntax:

```ts
let userName: string | null = null;        // Intentionally no value
let userAge: number | undefined;           // Declared but not assigned
```

TypeScript's **string null checking** helps prevent common runtime errors by forcing you to handle these cases explicitly. When you have a variable that might be `null` or `undefined`, you must check for these values before accessing properties or methods.

```ts
function getLength(text: string | null): number {
    if (text === null) {
        return 0;  // Handle the null case
    }
    return text.length;  // Safe to use string methods
}
```

### Type Inference in Action:

When you initialize a variable with a value, TypeScript examines that value and automatically assigns the appropriate type:

#### Basic Syntax:

```ts
let message = "Hello, World!";  // TypeScript infers: string
let count = 42;                 // TypeScript infers: number
let isActive = true;            // TypeScript infers: boolean
```

This type inference provides the same type safety as explicit annotations, but with cleaner, more readable code. TypeScript will still catch type errors if you try to reassign these variables to incompatible values.

Type inference works because TypeScript analyzes the initial value at the moment of assignment. A string value tells TypeScript the variable should be of type `string`, a numeric value indicates a `number`, and so on.

### Explicit Type Annotations:

Understanding when to use explicit annotations versus relying on inference is crucial for writing effective TypeScript code.

#### Basic Syntax:

The most common scenario requiring explicit type annotations is when you declare a variable without immediately assigning it a value:

```ts
let score: number;  // Must specify type explicitly
score = 85;         // Assign value later
```

Without the explicit `: number` annotation, TypeScript would infer the type as `any`, losing all type safety benefits. By explicitly declaring the type, you ensure that only numeric values can be assigned to this variable later.

## Data Structure: Arrays & Tuples

### Typed Arrays:

**Typed arrays** are one of TypeScript's most powerful features for organizing and managing values while maintaining type safety.

In TypeScript, you can specify that an array should only contain elements of a particular type using the `Type[]` syntax. This ensures that every element in the array matches the expected type, preventing common errors that occur when mixing different data types.

#### Basic Syntax:

```ts
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Alice", "Bob", "Charlie"];
let flags: boolean[] = [true, false, true];
```

When you declare a typed array, TypeScript enforces that only values of the specified type can be added to it. This means you can't accidentally mix strings with numbers on other incompatible types, rather which helps catch errors during development rather than at runtime.

### 'readonly' Modifiers for Arrays:

TypeScript provides the `readonly` modifier for arrays, which prevents any changes to the array's contents once it's created.

When you add `readonly` before an array type, TypeScript ensures that you cannot add, remove or modify elements. This creates an **immutable data structure** that's perfect for configuration data, constants, or any situation where you want to guarantee the array won't change.

#### Basic Syntax:

```ts
let colors: readonly string[] = ["red", "green", "blue"];
let numbers: readonly number[] = [1, 2, 3, 4, 5];
```

The `readonly` modifier blocks all mutating operations like `push()`, `pop()`, `splice()` and direct index assignment. If you try to use these methods, TypeScript will show a compile-time error, preventing potential bugs before your code runs.

### What is a Tuple?

A tuple is an array with a fixed number of elements where the type of each element at each position is known and defined.

Think of a tuple as a container with labelled slots, unlike a regular array where you might have `string[]` (any number of strings), a tuple specifies exactly how many elements it contains and what type each element should be.

#### Basic Syntax:

```ts
// Regular array - any number of strings
let names: string[] = ["Alice", "Bob", "Charlie"];

// Tuple - exactly 2 elements: string, then number
let person: [string, number] = ["Alice", 25];
```

#### Key Difference:

The key difference is that tuples have a **fixed structure**. In the example above,the first element must always be a string, the second must always be a number, and there can be no third element.

### Declaring and Accessing Tuples:

The syntax for creating a tuple is straightforward: you specify the types of each element in square brackets, in the exact order they should appear. Following this format: `[Type1, Type2, Type3]`.

#### Example of Usage:

```ts
let productInfo: [string, number] = ["Laptop", 999];
let coordinates: [number, number] = [10, 20];
let userRecord: [number, string, boolean] = [1, "Alice", true];
```

#### Accessing Tuple Elements:

Similar to arrays, you can perform an index operator or notation to retrieve an element at the specified index:

```ts
let product: [string, number] = ["Phone", 599];
console.log(product[0]); // "Phone" (TypeScript knows this is a string)
console.log(product[1]); // 599 (TypeScript knows this is a number)
```

TypeScript knows the exact type at each position, so you get full type safety. The key advantage is that TypeScript enforces both the correct type and the correct position. If you access `product[0]`.toFixed(), TypeScript will catch the error because it knows the first element is a string, not a number.

### Destructuring Tuples:

WHel accessing tuple elements by index works perfectly, there's an even more elegant way to extract values from tuples: **destructuring**. This JavaScript feature works seamlessly with TypeScript's typed tuples, allowing you to unpack tuple values into separate variables in a single line.

#### Basic Syntax:

Array destructuring uses square brackets on the left side of an assignment to create new variables that correspond to each position in the tuple:

```ts
let userInfo: [number, string] = [42, "Alice"];
let [id, name] = userInfo;

console.log(id);   // 42 (TypeScript knows this is a number)
console.log(name); // "Alice" (TypeScript knows this is a string)
```

### Readonly Tuples:

Just as you can make arrays immutable with the `readonly` modifier, TypeScript allows you to create **readonly tuples** that cannot be modified after initialization. This provides the same immutability benefits for structured, fixed-length data.

When you add `readonly` before a tuple type, TypeScript prevents any changes to the tuple's elements. This means you cannot reassign values at specific positions or use methods that would modify the tuple's contents.

#### Basic Syntax:

```ts
let point: readonly [number, number] = [10, 20];
let coordinates: readonly [string, number, number] = ["A", 5, 15];
```

The `readonly` modifier is particularly valuable for tuples because they often represent important structured data like coordinates, RGB color values, or database records that shouldn't change once created.

### Multi-dimensional Typed Arrays:

TypeScript allows you to create **multi-dimensional arrays** to handle this kind of structured data with full type safety.

A multi-dimensional array is essentially an array of arrays. The most common example is a 2D array, which you can think of as a grid or a matrix. To type a 2D array in TYpeScript, you use the `Type[][]` syntax:

#### Basic Syntax:

```ts
let grid: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let gameBoard: string[][] = [
  ["X", "O", "X"],
  ["O", "X", "O"],
  ["X", "O", "X"]
];
```

#### Accessing Elements:

To access elements in a multi-dimensional array, you sue multiple sets of square brackets. The first index selects the row, and the seconds index selects the column within that row:

```ts
let matrix: number[][] = [[1, 2], [3, 4]];
console.log(matrix[0][1]); // 2 (first row, second column)
console.log(matrix[1][0]); // 3 (second row, first column)
```

TypeScript ensures that each inner array contains only elements of the specified type, giving you the same type safety benefits you get with regular arrays, but extended to work with complex grid-like data structures.

### Spread Operator with Arrays:

JavaScript's spread operator (`...`) is a powerful feature that works seamlessly with TypeScript's typed arrays. When you use the spread operator syntax to combine arrays, TypeScript automatically infers the correct type for the resulting array, maintaining full type safety throughout the operation.

#### What the Spread Operator Does:

The spread operator allows you to "spread out" the elements of an array into individual elements. When combining typed arrays, you simple use the spread syntax inside square brackets to create a new array:

#### Basic Syntax:

```ts
let firstNumbers: number[] = [1, 2, 3];
let secondNumbers: number[] = [4, 5, 6];
let combined: number[] = [...firstNumbers, ...secondNumbers];
// Result: [1, 2, 3, 4, 5, 6]
```

You can also mix the spread operator with individual elements:

```ts
let scores: number[] = [85, 92];
let allScores: number[] = [100, ...scores, 78];
// Result: [100, 85, 92, 78]
```

This approach creates an new array without modifying the original arrays, which is particularly useful when working with immutable data patterns. The spread operator provides a clean, readable way to combine arrays while preserving TypeScript's type checking benefits.

## Working with Functions:

### Typing Parameters & Return Values:

Functions are the building blocks of any application, and TypeScript makes them safer and more predictable by allowing you to specify exactly what types of data they accept and return. When you add **type annotations** to functions, you create a clear contract that defines what goes in and what comes out.

#### Basic Syntax:

To add types to a function, you specify the type for  each parameter after its name, and optionally specify the return type after the parameter list:

```ts
function greet(name: string): string {
  return "Hello, " + name;
}

function multiply(a: number, b: number): number {
  return a * b;
}
```

The syntax follows a simple pattern: `parameterName: type` foe each parameter, and `: returnType` after the closing parenthesis.

### Typing Arrow Functions:

For arrow functions, you add type annotations to parameters within the parenthesis, just like regular functions. The return type annotation comes after the parameter list but before the arrow (`=>`):

#### Basic Syntax:

```ts
const multiply = (a: number, b: number): number => {
  return a * b;
};

const greet = (name: string): string => `Hello, ${name}!`;
```

The key difference from regular function declarations is that the return type annotation appears before the arrow rather than after the function name. This maintains TypeScript's type safety while preserving the clean, modern syntax that makes arrow functions popular.

### The 'void' Return Type:

Similar to Java, when a function performs an action but doesn't return anything meaningful, you use the `void` return type to explicitly indicate this intention.

The `void` type represents the absence of a return value. Functions that log messages, update variables, or perform side effects typically use `void` as their return type:

#### Basic Syntax:

```ts
function logMessage(message: string): void {
  console.log(message);
}

function updateCounter(): void {
  counter++;
}
```

While TypeScript can often infer that a function return `void`, explicitly adding the `: void` annotation makes your code more readable and communicates your intent clearly to other developers.

### Optional Parameters with '?':

Sometimes you want to create functions where certain parameters are not always required. TypeScript provides the `?` syntax to mark parameters as **optional**, meaning callers can choose whether or not to provide them when calling the function.

#### Basic Syntax:

To make a parameter optional, you add a question mark after the parameter name but before the type annotation:

```ts
function greet(name: string, greeting?: string): string {
  if (greeting) {
    return greeting + ", " + name;
  }
  return "Hello, " + name;
}
```

In this example, `name` is required while `greeting` is optional. You can call this function with just the name(`greet("Alice")`) or with both parameters(`greet("Alice", "Good morning")`). Inside the function, optional parameters have the type `string | undefined`, so you should check if they exist before using them!

### Default Parameter Values:

While optional parameters let you choose whether to provide a value, **default parameters** take this concept further by automatically providing a fallback value when no argument is passed. This makes functions more convenient to use while maintaining type safety.

#### Basic Syntax:

To create a default parameter, you assign a value directly in the function signature using the equals sign. TypeScript automatically infers the parameter's type from the default value:

```ts
function greet(name: string, greeting = "Hello"): string {
  return greeting + ", " + name;
}

function calculateArea(width: number, height = 10): number {
  return width * height;
}
```

Even though the default parameter has been inserted with a value, you can still use type annotation on the parameter what will receive that value by default, and TypeScript will already know what value it will hold.

Default parameters are effectively optional - you don't need to use the `?` syntax because the default value ensures the parameter always has a value. This approach is cleaner than optional parameters when you have a sensible default, as it eliminates the need to check for `undefined` inside your function.