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

### Typing Rest Parameters:

TypeScript provides **rest parameters** to handle this scenario elegantly while maintaining type safety.

Rest parameters use the spread operator (`...`) followed by a parameter name and a typed array. This collects all remaining arguments into a single array parameter:

#### Basic Syntax:

```ts
function sum(...numbers: number[]): number {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}

// Can be called with any number of arguments
sum(1, 2);           // 3
sum(1, 2, 3, 4, 5);  // 15
```

The rest parameter must always be the last parameter in the function signature. TypeScript ensures that all arguments passed to the rest parameter match the specified array type, giving you the flexibility of variable arguments with the safety of static typing.

### Defining Function Types:

TypeScript allows you to create a **type alias** for a function's signature, which acts like a blueprint that functions must match.

A function type alias defines the shape of a function using the `type` keyword. This syntax shows the parameter types in parentheses followed by an arrow and the return type:

#### Basic Syntax:

```ts
type MathOperation = (a: number, b: number) => number;

const add: MathOperation = (a, b) => {
  return a + b;
};

const multiply: MathOperation = (a, b) => {
  return a * b;
};
```

In this example, `MathOperation` is a type alias that describes any function taking two numbers and returning a number. Both `add` and `multiply` conform to this type, ensuring consistency across your codebase. It is optional to provide a type annotation to the implemented method, even though TypeScript will already know that the type function will return a specified type when it was first defined.

## Types: Aliases, unions and Inter

### Type Aliases for Primitives:

TypeScript's `type` keyword allows you to create a **type alias** - essentially a custom name for any existing type, including primitive types and their combinations.

The syntax is straightforward: you use the `type` keyword followed by your chosen name, an equals sign, and the type you want to alias:

#### Basic Syntax:

```ts
type UserID = string | number;
type Score = number;
type IsActive = boolean;
```

Once you've created a type alias, you can use it anywhere you would use the original type. This is particularly valuable when working with union types, as it makes your code more readable and self-documenting:

```ts
type UserID = string | number;

let currentUser: UserID = "user123";
let adminUser: UserID = 42;
```

Type aliases don't create new types - they dimply provide alternative names for existing ones. This means `UserID` and `string | number` are completely interchangeable, but using the alias makes your code's intent much clearer to other developers.

### Union Types ('|'):

Sometimes you need a variable that can hold different types of values depending on the situation. For example, a user ID might be stored as either a string like "user123" or a number like `42`. TypeScript's **union types** (similar to Python's union types) solve this problem by allowing a variable to be one of several specified types.

Union types use the pipe character (`|`) to combine multiple types. The syntax reads naturally as "this OR that":

#### Basic Syntax:

```ts
let userId: string | number;

userId = "user123";  // Valid - string
userId = 42;         // Valid - number
userId = true;       // Error - boolean not allowed
```

You can manipulate with union types anywhere, when declaring a variable, or type aliases, method return values and parameter values!

```ts
function displayMessage(content: string | number): void {
  console.log("Message: " + content);
}

displayMessage("Hello!");  // Works with string
displayMessage(404);       // Works with number
```

Union types provide type safety while maintaining flexibility - TypeScript ensures you only use values that match one of the specified types, preventing runtime errors from unexpected data types.

### Working with Union Types:

When you work with union types, TypeScript enforces an important safety rule: you can only access properties and methods that exist on **all types** in a union. This prevents runtime errors but means you need special techniques to access type-specific features.

#### Basic Syntax:

Consider a function that accepts either a string or an array of strings. Both types have a `length` property, so you can safely access it:

```ts
function getLength(input: string | string[]): number {
  return input.length; // Safe - both types have length
}
```

#### Handling Distinct type Properties:

However, if you try to use a method that only exists on one type, TypeScript will show an error. To safely access type-specific members, you need a **type guard**, which is a runtime check that narrows the type:


```ts
function processInput(input: string | string[]): void {
  if (typeof input === "string") {
    // TypeScript knows input is a string here
    console.log(input.toUpperCase());
  } else {
    // TypeScript knows input is string[] here
    console.log(input.join(", "));
  }
}
```

The `typeof` operator is one of the most common type guards. After the check, TypeScript automatically narrows the type within each branch, giving you full access to type-specific properties and methods while maintaining complete type safety.

### Literal Types:

**Literal types** let you constrain a variable to exact, specific values rather than broad categories. Instead of accepting any string, you can limit it to only `"left"`, `"right"`, `"up"` or `"down"`.

A literal type uses the exact value as the type itself. You can create literal types for strings, numbers or boolean:

#### Basic Syntax:

```ts
let direction: "left" = "left";  // Only "left" is allowed
let count: 42 = 42;              // Only the number 42 is allowed
let isReady: true = true;        // Only true is allowed
```

Literal types become powerful when combined with union types, creating a controlled set of allowed values. This is perfect for scenarios like directions, status codes, or configuration options:

```ts
type Direction = "left" | "right" | "up" | "down";
type Status = "pending" | "approved" | "rejected";

let playerMove: Direction = "up";    // Valid
let orderStatus: Status = "pending"; // Valid
// let invalid: Direction = "diagonal"; // Error!
```

This approach gives you the flexibility of multiple options while maintaining strict type safety. TypeScript will catch typos and invalid values at compile time, making your code more reliable than using general string types.

### Intersection Types ('&'):

While union types let you create variables that can be one of several types, **intersection types** work in the opposite direction. They combine multiple types into a single type that has all of the properties of the combined types!

Intersection types use the ampersand (`&`) operator to merge types together. When you intersect two object types, the result contains every property from both types:

#### Basic Syntax:

```ts
type HasName = { name: string };
type HasAge = { age: number };

type Person = HasName & HasAge;

// Person now has both name AND age properties
let user: Person = {
  name: "Alice",
  age: 30
};
```

This is particularly useful when you want to build complex types from smaller, reusable pieces. Instead of defining one large object type, you can create focused types for specific concerns and then combine them as needed.

Intersection types ensure that the resulting type satisfies all the requirements of the intersected types. The variable must have every property from every type in the intersection - there's no picking and choosing like with unions.

#### Example of Usage:

```ts
type HasName = { name: string };
type HasAge = { age: number };
type HasEmail = { email: string };

// Create Person and Employee types using intersection
type Person = HasName & HasAge;
type Employee = HasName & HasAge & HasEmail;

// Create variables user and worker
const user: Person = {
    name: "Alice",
    age: 25
};

const worker: Employee = {
    name: "Bob",
    age: 30,
    email: "bob@company.com"
};

// Create displayPerson and displayEmployee functions
function displayPerson(person: Person): string { return `Name: ${person.name}, Age: ${person.age}`; }
function displayEmployee(employee: Employee): string { return `Name: ${employee.name}, Age: ${employee.age}, Email: ${employee.email}`; }

// Call the functions and print the results
console.log(displayPerson(user));
console.log(displayEmployee(worker));
```

### Combining Type Aliases:

On of the most powerful aspects of type aliases is their ability to be combined and reused to create more sophisticated type definitions. Instead of defining complex types from scratch each time, you can build them by composing smaller, focused type aliases together.

This approach promotes code reusability and makes your type definitions more maintainable. When you need to update a base type, all of the composed types that use it automatically inherit the changes:

#### Basic Syntax:

```ts
type Email = string;
type Phone = number;

type Contact = {
  name: string;
  email: Email;
  phone: Phone;
};
```

You can also combine type aliases within union types to create flexible data structures. This is particularly useful when an object property might accept different formats:

```ts
type ContactMethod = Email | Phone;

type User = {
  id: number;
  preferredContact: ContactMethod;
};
```

This compositional approach makes your code more expressive and easier to understand, rather than seeing generic types like `string` or `number`. Other developers will immediately understand the intended purpose through meaningful type names like `Email` and `Phone`.

## Typing Objects and Interfaces:

### Inline Object Type Annotations:

Sometimes you need to define the structure of an object for a single, specific use case. Instead of creating a reusable type alias or interface, TypeScript allows you to define the object's shape directly where you declare the variable. This is called an **inline object type annotation**.

#### Basic Syntax:

The syntax uses curly braces to describe the object's properties and their types right in the variable declaration:

```ts
let user: { name: string; id: number } = {
  name: "Alice",
  id: 123
};
```

This approach is pperfect for one-off object structure that you don't plan to reuse elsewhere in your code.

#### Example of Usage:

```ts
// Create the student variable with inline object type annotation
let student: { name: string, studentId: number, isEnrolled: boolean } = {
    name: "Sarah Johnson",
    studentId: 12345,
    isEnrolled: true
};
// Create the course variable with inline object type annotation
let course: { title: string, credits: number, instructor: string } = {
    title: "Introduction to TypeScript",
    credits: 3,
    instructor: "Dr. Smith"
};
// Print the required information
console.log(student.name)       // "Sarah Johnson"
console.log(student.studentId)  // 12345
console.log(course.title)       // "Introduction to TypeScript"
console.log(course.credits)     // 3
```

### Type Aliases for Objects:

TypeScript allows you to create a **type alias** that defines a reusable shape for objects.

A type alias uses the `type` keyword to create a named definition for an object structure. Once defined, you can use this alias anywhere you need that specific object shape:

#### Basic Syntax:

```ts
type Product = {
  name: string;
  price: number;
  inStock: boolean;
};

let laptop: Product = {
  name: "Gaming Laptop",
  price: 1299,
  inStock: true
};

let phone: Product = {
  name: "Smartphone",
  price: 699,
  inStock: false
};
```

#### Example of Usage:

```ts
// Create type aliases for Book and Movie
type Book = {
    title: string,
    author: string,
    pages: number,
    isAvailable: boolean
};
type Movie = {
    title: string,
    director: string,
    duration: number,
    rating: string
};
// Create variables using the type aliases
let novel: Book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180,
    isAvailable: true
};
let textbook: Book = {
    title: "TypeScript Handbook",
    author: "Microsoft",
    pages: 450,
    isAvailable: false
};
let film: Movie = {
    title: "Inception",
    director: "Christopher Nolan",
    duration: 148,
    rating: "PG-13"
};
// Create functions to get information
function getBookInfo(book: Book): string { return `${book.title} by ${book.author} - ${book.pages} pages`; }
function getMovieInfo(movie: Movie): string { return `${movie.title} directed by ${movie.director} (${movie.duration} min)`; }
// Print the required outputs
console.log(getBookInfo(novel))     // The Great Gatsby by F. Scott Fitzgerald - 180 pages
console.log(getBookInfo(textbook))  // TypeScript Handbook by Microsoft - 450 pages
console.log(getMovieInfo(film)) // Inception directed by Christopher Nolan (148 min)
console.log(novel.isAvailable)  // true
```

### Introduction to Interfaces:

Interfaces serve the **same fundamental purpose as type aliases for objects** but use a different syntax and offer <i>unique capabilities</i>.

An interface is declared using the `interface` keyword followed by the interface name and the object structure in curly braces:

#### Basic Syntax:

```ts
interface Animal {
  name: string;
  sound: string;
}

let dog: Animal = {
  name: "Buddy",
  sound: "Woof"
};
```

The syntax is clean and straightforward - you simple list the properties and their types within the interface body. Once defined, you can use the interface name as the type annotation anywhere in your code, just like with type aliases.

#### Example of Usage:

```ts
// Create the Pet interface
interface Pet {
    name: string,
    species: string,
    age: number,
    isVaccinated: boolean
};

// Create the Vehicle interface
interface Vehicle {
    make: string,
    model: string,
    year: number
};

// Create the variables using your interfaces
let myDog: Pet = {
    name: "Buddy",
    species: "Golden Retriever",
    age: 3,
    isVaccinated: true
};
let myCat: Pet = {
    name: "Whiskers",
    species: "Persian",
    age: 2,
    isVaccinated: false
};
let myCar: Vehicle = {
    make: "Toyota",
    model: "Camry",
    year: 2022
};
// Create the describePet function
function describePet(pet: Pet): string { return `${pet.name} is a ${pet.age}-year-old ${pet.species}`; }
// Create the getVehicleInfo function
function getVehicleInfo(vehicle: Vehicle): string { return `${vehicle.year} ${vehicle.make} ${vehicle.model}`; }
// Print the required outputs
console.log(describePet(myDog))     // Buddy is a 3-year-old Golden Retriever
console.log(describePet(myCat))     // Whiskers is a 2-year-old Persian
console.log(getVehicleInfo(myCar))  // 2022 Toyota Camry
console.log(myDog.isVaccinated)     // true
```

### Interfaces Vs Type Aliases:

Now that we know about both of these TypeScript features that we can use for object definition, it's important to understand when to use each approach. While they serve similar purposes, there are key differences that can influence your choice.

#### Similarities:

Both interfaces and type aliases can define the structure of objects with the same level of type safety. You can uuse either approach to specify required properties, optional properties, and readonly properties. Both also support extending or combining with other types.

#### Key Difference - Declaration Merging:

Tho most significant difference is that interfaces support **declaration merging**, while type aliases do not. This means you can declare the same interface multiple times, and TypeScript will automatically merge all declarations into a single interface:

```ts
interface User {
  name: string;
}

interface User {
  age: number;
}

// TypeScript merges these into:
// interface User {
//   name: string;
//   age: number;
// }
```

If you try the same approach with type aliases, TypeScript will throw an error about duplicate identifiers. This merging capability makes interfaces particularly useful when working with libraries or when you need to extend existing type definitions across different parts of your codebase.

#### When to Choose:

Use **interfaces** when defining object shapes that might need to be extended or merged later.

Use **type aliases** when you need more complex type operations like unions, intersections, or when working with primitive types.

### Optional & Readonly Properties:

TypeScript provides two powerful modifiers that give you this control: the **optional property modifier** and the **readonly modifier**.

#### Basic Syntax:

The `?` symbol makes a property optional, meaning it doesn't have to be present when creating an object. This is useful for properties that might not always be needed:

```ts
interface User {
  name: string;
  email?: string;  // Optional property
}

let user1: User = { name: "Alice" };  // Valid - email is optional
let user2: User = { name: "Bob", email: "bob@example.com" };  // Also valid
```

In the other hand, the `readonly` modifier prevents a **property from being changed** after the object is created. This is perfect for properties that should remain constant, like unique identifiers:

```ts
interface Product {
  readonly id: number;  // Cannot be changed after creation
  name: string;
}

let product: Product = { id: 1, name: "Laptop" };
product.name = "Gaming Laptop";  // Valid
// product.id = 2;  // Error: Cannot assign to 'id' because it is readonly
```

You can combine both modifiers on the same interface, and these modifiers work identically with both interfaces and type aliases, giving you precise control over your object structures.

#### Example of Usage:

```ts
// Create the Book interface
interface Book {
    title: string,
    readonly isbn: string,
    subtitle?: string,
    pages: number,
    readonly publishedYear: number,
    genre?: string
};

// Create the Magazine interface
interface Magazine {
    name: string,
    readonly issueNumber: number,
    topic?: string,
    monthlySubscription: boolean
};

// Create the variables using your interfaces
let novel: Book = {
    title: "1984",
    isbn: "978-0-452-28423-4",
    pages: 328,
    publishedYear: 1949
};
let cookbook: Book = {
    title: "The Joy of Cooking",
    isbn: "978-0-7432-4626-2",
    subtitle: "All About Baking",
    pages: 1132,
    publishedYear: 2006,
    genre: "Cooking"
};
let techMag: Magazine = {
    name: "Tech Today",
    issueNumber: 45,
    monthlySubscription: true
};
let scienceMag: Magazine = {
    name: "Science Weekly",
    issueNumber: 12,
    topic: "Climate Change",
    monthlySubscription: false
};
// Create the getBookDetails function
function getBookDetails(book: Book): string { return `${book.title} - ${book.pages} pages`; }
// Create the getMagazineInfo function
function getMagazineInfo(mag: Magazine): string { return `${mag.name} Issue #${mag.issueNumber}`; }
// Print the required outputs
console.log(getBookDetails(novel))
console.log(getBookDetails(cookbook))
console.log(getMagazineInfo(techMag))
console.log(getMagazineInfo(scienceMag))
console.log(novel.isbn)
console.log(techMag.monthlySubscription)
```

##### Result:

```
1984 - 328 pages
The Joy of Cooking - 1132 pages
Tech Today Issue #45
Science Weekly Issue #12
978-0-452-28423-4
true
```

### Extending Interfaces and Types:

Instead of duplicating code, TYpeScript provides powerful mechanisms to build new types based on existing ones through **inheritance**.

For interfaces, you can use the `extends` keyword to create a new interface that inherits all properties from a base interface:

#### Basic Syntax:

```ts
interface Vehicle {
  brand: string;
  year: number;
}

interface Car extends Vehicle {
  doors: number;
}

// Car now has: brand, year, and doors
```

For type aliases, you achieve the same result using **intersection types** with the `&` operator:

```ts
type Vehicle = {
  brand: string;
  year: number;
};

type Car = Vehicle & {
  doors: number;
};

// Car has the same properties as the interface example
```

Both approaches create new types that contain all the properties from the base type plus any additional properties you define. This promotes code reusability and helps maintain consistency across related types in your application.

#### Example of Usage:

```ts
// Create the Employee interface
interface Employee {
    id: number,
    name: string,
    department: string
};

// Create the Manager interface that extends Employee
interface Manager extends Employee {
    teamSize: number,
    budget: number
};

// Create the Contact type alias
type Contact = {
    email: string,
    phone: string
};

// Create the Developer type alias using intersection types
type Developer = Employee & Contact & { programmingLanguages: string[], yearsExperience: number };

// Create the teamLead variable of type Manager
const teamLead: Manager = {
    id: 101,
    name: "Alice Johnson",
    department: "Engineering",
    teamSize: 8,
    budget: 250000
};

// Create the softwareDev variable of type Developer
const softwareDev: Developer = {
    id: 102,
    name: "Bob Smith",
    department: "Engineering",
    email: "bob.smith@company.com",
    phone: "555-0123",
    programmingLanguages: ["TypeScript", "Python", "Java"],
    yearsExperience: 5
};

// Create the getManagerSummary function
function getManagerSummary(manager: Manager): string {
    return `${manager.name} manages ${manager.teamSize} people with a budget of $${manager.budget}`;
}

// Create the getDeveloperSkills function
function getDeveloperSkills(dev: Developer): string {
    return `${dev.name} knows ${dev.programmingLanguages.join(", ")} (${dev.yearsExperience} years experience)`;
}

// Print the required outputs
console.log(getManagerSummary(teamLead))
console.log(getDeveloperSkills(softwareDev))
console.log(teamLead.department)
console.log(softwareDev.email)
```

##### Result:

```
Alice Johnson manages 8 people with a budget of $250000
Bob Smith knows TypeScript, Python, Java (5 years experience)
Engineering
bob.smith@company.com
```

### Adding Methods to Interfaces:

TypeScript interfaces allow you to define these behaviors by including **method signatures** alongside property definitions.

A method signature in an interface specifies the name of a method, its parameters, and its return type, without providing the actual implementation. This creates a contract that any object conforming to the interface must fulfill:

#### Basic Syntax:

```ts
interface Person {
  name: string;
  age: number;
  greet(): string;  // Method signature
}

let user: Person = {
  name: "Alice",
  age: 30,
  greet() {
    return `Hello, I'm ${this.name}`;
  }
};
```

The method signature `greet(): string` tells TypeScript that any object implementing the `Person` interface must have a `greet` method that takes no parameters and returns a string as a result. The actual implementation can vary between different objects, but the signature must match exactly.

#### Example of Usage:

```ts
// Create the Calculator interface with the required properties and methods
interface Calculator {
    brand: string,
    model: string,
    isScientific: boolean,
    add(n1: number, n2: number): number,
    getInfo(): string
};
// Create the BankAccount interface with the required properties and methods
interface BankAccount {
    accountNumber: string,
    balance: number,
    isActive: boolean,
    deposit(val: number): void,
    getBalance(): number
};
// Create the myCalculator variable of type Calculator
const myCalculator: Calculator = {
    brand: "Casio",
    model: "FX-991EX",
    isScientific: true,
    add(n1: number, n2: number): number { return n1 + n2; },
    getInfo(): string { return `${this.brand} ${this.model}`; }
};
// Create the savingsAccount variable of type BankAccount
const savingsAccount: BankAccount = {
    accountNumber: "SAV-12345",
    balance: 1500,
    isActive: true,
    deposit(val: number): void { this.balance += val; },
    getBalance(): number { return this.balance; }
}
// Print all the required outputs
console.log(myCalculator.getInfo())
console.log(myCalculator.add(15, 27))
console.log(savingsAccount.getBalance())
savingsAccount.deposit(250)
console.log(savingsAccount.getBalance())
console.log(myCalculator.isScientific)
```

##### Result:

```
Casio FX-991EX
42
1500
1750
true
```

### Recap - Typing Methods and Interfaces:

Let's begin our recap for this topic:

* **Inline Object Type Annotations**: If you want to initialize only one object and utilize type annotation, this approach would come in handy! Instead of making a type alias or an interface which will be used only once, you can apply these concepts inside the type annotation for quick and easy creation:

```ts
let user: { name: string; id: number } = {
  name: "Alice",
  id: 123
};
```

* **Type Aliases for Objects**: Type aliases allow you to define a particular and custom type, which defines a reusable shape for other objects that will consume those blueprints:

```ts
type Product = {
  name: string;
  price: number;
  inStock: boolean;
};

const juiceBox: Product = {
  name: "banana juice",
  price: 1.19,
  inStock: true
};
```

* **Interfaces**: Similar to type aliases, but are initialized and manipulated with using different syntax:

```ts
interface Employee {
  id: number,
  name: string,
  age: number
};

const myEmployee: Employee = {
  id: 1,
  name: "Stuart",
  age: 25
};
```

* **Optional & Readonly Properties**: Use the `?` sign for optional properties, while the `readonly` keyword should be used for only getting a particular value from this property:

```ts
interface User {
  readonly id: number,
  name: string,
  email?: string  // Optional property
};

const myUser: User = {
  id: 1,
  name: "User1",
};
```

* **Extending Interfaces & Types**: For `interfaces`, use the `extends` keyword for the allowance of **inheritance**, in the other hand, type aliases should use `&` for intersections:

```ts
// Interfaces:
interface Vehicle {
  brand: string;
  year: number;
}

interface Car extends Vehicle {
  doors: number;
}

// Type Aliases:
type Vehicle = {
  brand: string;
  year: number;
};

type Car = Vehicle & {
  doors: number;
};
```

* **Methods in Interfaces & Type Aliases**: You can always add methods inside both interfaces and type aliases!

```ts
// Interfaces:
interface Person {
  name: string;
  age: number;
  greet(): string;  // Method signature
}

let user: Person = {
  name: "Alice",
  age: 30,
  greet() {
    return `Hello, I'm ${this.name}`;
  }
};

// Type Aliases:
type User = {
  username: string,
  password: string,
  enterInternet(username: string, password: string): boolean
};

const myUser: User = {
  username: "LobsterMan",
  password: "blablabla",
  enterInternet(username: String, password: string): boolean {
    return username.length > 0 && password.length > 0 ? true : false;
  };
};
```

#### Example of a Program:

```ts
// Create the Computer interface with the required properties and methods
interface Computer {
    readonly id: number,
    brand: string,
    ramInGB?: number,
    isLaptop: boolean,
    boot(): void
};
// Create the Server interface with the required properties and methods
interface Server {
    readonly hostname: string,
    operatingSystem: string,
    maxConnections?: number,
    isOnline: boolean,
    restart(): void,
    getStatus(): string
};
// Create the workstation, laptop, and webServer variables
const workstation: Computer = {
    id: 1001,
    brand: "Dell",
    ramInGB: 16,
    isLaptop: false,
    boot(): void { console.log("Dell workstation is booting up..."); }
};
const laptop: Computer = {
    id: 1002,
    brand: "MacBook",
    isLaptop: true,
    boot(): void { console.log("MacBook laptop is starting..."); }
};
const webServer: Server = {
    hostname: "web-01",
    operatingSystem: "Ubuntu",
    maxConnections: 1000,
    isOnline: true,
    restart(): void { console.log("Restarting web-01 server..."); },
    getStatus(): string { return "web-01 is online"; }
}
// Create the checkComputerSpecs and getServerInfo functions
function checkComputerSpecs(comp: Computer): string {
    return `${comp.brand} ${comp.isLaptop ? "laptop" : "desktop"}`;
}
function getServerInfo(server: Server): string {
    return `${server.hostname} runs ${server.operatingSystem}`;
}
// Print all the required outputs
workstation.boot()
laptop.boot()
console.log(checkComputerSpecs(workstation))
console.log(checkComputerSpecs(laptop))
console.log(webServer.getStatus())
console.log(getServerInfo(webServer))
console.log(workstation.id)
webServer.restart()
```

##### Result:

```
Dell workstation is booting up...
MacBook laptop is starting...
Dell desktop
MacBook laptop
web-01 is online
web-01 runs Ubuntu
1001
Restarting web-01 server...
```

## Enums:

### What is a Numeric Enum?

TypeScript enums provide a way to give meaningful names to a set of related numeric values. Instead of using magic numbers throughout your code, enums let you create a collection of named constants that make your code more readable and maintainable.

#### Basic Syntax:

A numeric enum is declared using the `enum` keyword. By default, TypeScript automatically assigns numeric values starting from 0 and incrementing by 1 for each member:

```ts
enum Status {
  Pending,    // 0
  Processing, // 1
  Complete    // 2
};
```

You can also designate variables with the corresponding property names so that they can store the number values:

```ts
const pendingStatus: Status = Status.Pending;
const ProcessingStatus: Status = Status.Processing;
const completeStatus: Status = Status.Complete;

console.log(pendingStatus)  // 0
```

This creates three constants: `Status.Pending` holding 0, `Status.Processing` which equals to 1, and `Status.Complete` with the number 2 designated with it. You can also explicitly set the starting value, and subsequent members will continue incrementing from that point.

### Using Numeric Enums:

You can use an enum as a type annotation just like any other TypeScript type! When you specify an enum as a parameter type, TypeScript ensures that only valid enum values can be passed to that function:

#### Basic Syntax:

```ts
function processUser(role: UserRole): void {
  if (role === UserRole.Admin) {
    console.log("Full access granted");
  } else if (role === UserRole.Editor) {
    console.log("Edit access granted");
  } else {
    console.log("View access only");
  }
}
```

However, it is key that you mention the name of the enum type, and not directly insert the `enum` keyword inside the type annotation for the parameter, which would not work because the `enum` keyword is not a static type, but a real object that exists at runtime.

This approach provides excellent type safety - TypeScript will catch any attempts to pass invalid values, and your code editor will offer autocompletion for the available enum members. You can call this function using `processUser(UserRole.Admin)` or ever `processUser(0)`, since numeric enums accept their underlying numeric values.

#### Example of Usage:

```ts
// Enums Object
enum UserRole {
    Admin,
    Editor,
    Viewer
};

const adminRole = UserRole.Admin;
const editorRole = UserRole.Editor;
const viewerRole = UserRole.Viewer;

// Create the checkPermissions function
function checkPermissions(role: UserRole): void {
    if (role === UserRole.Admin) console.log("Full access granted");
    else if (role === UserRole.Editor) console.log("Edit access granted");
    else console.log("View access only");
}

// Create currentUser variable
const currentUser: UserRole = UserRole.Editor;

// Create guestUser variable
const guestUser: UserRole = 2;

// Call checkPermissions with the required parameters
checkPermissions(adminRole)
checkPermissions(currentUser)
checkPermissions(guestUser)
checkPermissions(UserRole.Admin)
checkPermissions(0)
```

##### Results:

```
Full access granted
Edit access granted
View access only
Full access granted
Full access granted
```

### What is a String Enum?

String enums are declared by explicitly initializing each member with a string value:

#### Basic Syntax:

```ts
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
};
```

Unlike numeric enums that auto-increment, every member in a string enum must be explicitly initialized. The benefit is immediately clear when debugging - instead of seeing mysterious numbers like 0 or in your logs, you'll see descriptive values like `"UP"` or `"DOWN"`.

### Using String Enums:

String enums work particularly well as as function parameters because they provide clear, readable values while maintaining type safety.

Here's how you can use a string enum in a function:

#### Basic Syntax:

```ts
function move(direction: Direction): void {
  console.log(`Moving ${direction.toLowerCase()}...`);
}
```

When you call this function, TypeScript will only accept the predefined enum values. You can call it using `move(Direction.Up)`, which will output `"Moving up..."`. Your code editor will provide autocompletion for the available enum members, and TypeScript will catch any attempts to pass invalid direction values.

### Heterogeneous Enums:

TypeScript also supports heterogeneous enums - enums that contain a **mix of both string and numeric members** within the same declaration.

Here's how you can create a heterogeneous enum:

#### Basic Syntax:

```ts
enum MixedEnum {
  No = 0,
  Yes = "YES",
  Maybe = 1
};
```

In this example, `No` and `Maybe` are numeric members, while `Yes` is a string member. TypeScript allows this flexibility, though it's important to note that heterogeneous enums are rarely used in practice and that using JSON Objects would be the modern approach for this situation.

## Generics: A First Look

### The Problem Generics Solve:

Imagine you want to create a function that simply returns whatever value you pass to it - and "identity". In reguler JavaScript, you might write something like this:

```ts
function identity(arg: any): any {
  return arg;
}
```

While this function works, using `any` creates a significant problem: yyou lose all type safety. When you call `identity("Hello")`, TypeScript can't tell you that the result is a string. It only knows the result is `any`, which means you lose autocompletion, type checking and all the benefits TypeScript provides.

### Creating Generic Identity Functions:

Here's the syntax for a generic function using the classic identity example:

#### Basic Syntax:

```ts
function identity<T>(arg: T): T {
  return arg;
}
```

#### Breakdown:

The `<T>` after the function name declares a type parameter called `T`. This `T` acts as a placeholder that can represent any type. When you use this function, TypeScript will replace `T` with the actual type you're working with.

The beauty of this approach is that it preserves type information. If you call `identity("hello")`, TypeScript knows the return type is a string. If you call `identity(42)`, it'll also know its return type, which would be a   `number`. You get all the flexibility of working with multiply types while keeping full type safety.

By convention, `T` stands for "Type", but you can use any name you want for your type parameter. The important thing is that it creates a relationship between the input and output types of your function.

#### Example of Usage:

```ts
// Create the generic function wrapInObject
function wrapInObject<T>(item: T): {value: T} {
    return {value: item};
}

// Create the test variables
const wrappedString = wrapInObject("Hello TypeScript");
const wrappedNumber = wrapInObject(42);
const wrappedBoolean = wrapInObject(true);

// Print the outputs
console.log(wrappedString.value);
console.log(wrappedNumber.value);
console.log(wrappedBoolean.value);
console.log(wrapInObject("Generic").value);
console.log(wrapInObject(100).value);
```

##### Results:

```
Hello TypeScript
42
true
Generic
100
```

### Using a Generic Function:

There are two ways to use a generic function: with explicit type arguments or by letting TypeScript infer the type automatically.

#### Basic Syntax:

Here's how you can call a generic function with explicit type arguments:

```ts
const result1 = wrapInObject<string>("hello");
const result2 = wrapInObject<number>(42);
```

The `<string>` and `<number>` explicitly tell TypeScript what type to use for `T`. This gives you complete control over the type parameter.

However, TypeScript is smart enough to infer the type from the argument you pass in most cases:

```ts
const result1 = wrapInObject("hello");  // T inferred as string
const result2 = wrapInObject(42);       // T inferred as number
```

Type inference makes your code cleaner and more readable while maintaining the same type safety. TypeScript analyzes the argument and automatically determines what `T` should be, so you don't have to type the explicit type annotation unless you want to override the inferred type.

#### Example of Usage:

```ts
// Generic function from previous challenge
function wrapInObject<T>(item: T): { value: T } {
    return { value: item };
}

// Create variables using explicit type arguments
const explicitString = wrapInObject<string>("TypeScript");
const explicitNumber = wrapInObject<number>(25);
const explicitBoolean = wrapInObject<boolean>(false);

// Create variables using type inference
const inferredString = wrapInObject("Generics");
const inferredNumber = wrapInObject(99);
const inferredBoolean = wrapInObject(true);

// Print the results
console.log(explicitString.value)
console.log(explicitNumber.value)
console.log(explicitBoolean.value)
console.log(inferredString.value)
console.log(inferredNumber.value)
console.log(inferredBoolean.value)
```

##### Result:

```
TypeScript
25
false
Generics
99
true
```
