// Create the InventoryItem interface and the required objects:
interface InventoryItem<T> {
    id: number;
    quantity: number;
    details: T;
};

// Create two specific Object Types with Type Alias:
type Book = {
    title: string;
    author: string;
};

type Electronic = {
    brand: string;
    model: string;
};

type Clothing = {
    size: string;
    color: string;
};

// Create Type Aliases for Inventory Items:
type BookItem = InventoryItem<Book>;
type ElectronicItem = InventoryItem<Electronic>;
type ClothingItem = InventoryItem<Clothing>;

// Objects to use with the interface:
const book1: InventoryItem<Book> = {
    id: 1,
    quantity: 5,
    details: { title: "TypeScript Guide", author: "John Doe" }
};

const electronic1: InventoryItem<Electronic> = {
    id: 2,
    quantity: 3,
    details: { brand: "TechCorp", model: "X200" }
};

const clothing1: InventoryItem<Clothing> = {
    id: 3,
    quantity: 10,
    details: { size: "M", color: "Blue" }
};

const newBook: InventoryItem<{ title: string; author: string }> = {
    id: 4,
    quantity: 2,
    details: { title: "Advanced TypeScript", author: "Jane Smith" }
};

const newElectronic: InventoryItem<{ brand: string; model: string }> = {
    id: 5,
    quantity: 1,
    details: { brand: "GadgetCorp", model: "Z500" }
};

const specificBook: BookItem = {
    id: 100,
    quantity: 8,
    details: { title: "Clean Code", author: "Robert Martin" }
};

const specificElectronic: ElectronicItem = {
    id: 200,
    quantity: 4,
    details: { brand: "Sony", model: "WH-1000XM4" }
};

const anotherBook: BookItem = {
    id: 101,
    quantity: 3,
    details: { title: "Design Patterns", author: "Gang of Four" }
};

// Inventory Arrays:
const bookInventory: InventoryItem<Book>[] = [book1];
const electronicInventory: InventoryItem<Electronic>[] = [electronic1];
const clothingInventory: InventoryItem<Clothing>[] = [];

const mixedBookInventory: InventoryItem<{ title: string; author: string }>[] = [
    { id: 10, quantity: 3, details: {title: "JavaScript Basics", author: "Alice Brown"} },
    { id: 11, quantity: 7, details: {title: "React Fundamentals", author: "Bob Wilson"} },
    { id: 12, quantity: 2, details: {title: "Node.js Guide", author: "Carol Davis"} }
];

const mixedElectronicInventory: InventoryItem<{ brand: string; model: string }>[] = [
    { id: 20, quantity: 5, details: {brand: "Samsung", model: "Galaxy S23"} },
    { id: 21, quantity: 1, details: {brand: "Apple", model: "iPhone 15"} }
];

const bookStore: BookItem[] = [specificBook];
const electronicStore: ElectronicItem[] = [specificElectronic];
const clothingStore: ClothingItem[] = [];

// Generic Function:
function addItem<T>(inventory: InventoryItem<T>[], newItem: InventoryItem<T>): InventoryItem<T>[] {
    inventory.push(newItem);
    return inventory;
};

function findItemById<T>(inventory: InventoryItem<T>[], id: number): InventoryItem<T> | undefined {
    return inventory.filter(item => item.id === id).at(0);
};

// Executing functions:
const updatedBookInventory: InventoryItem<{ title: string; author: string }>[] = addItem(bookInventory, newBook);
const updatedElectronicInventory: InventoryItem<{ brand: string; model: string }>[] = addItem(electronicInventory, newElectronic);

const expandedBookStore: BookItem[] = addItem(bookStore, anotherBook);

// Print the required outputs
console.log(specificBook.details.title);
console.log(specificBook.details.author);
console.log(specificElectronic.details.brand);
console.log(specificElectronic.details.model);
console.log(expandedBookStore.length);
console.log(findItemById(expandedBookStore, 101)?.details.title);
console.log(findItemById(electronicStore, 200)?.quantity);
console.log(expandedBookStore[1]?.details.author);