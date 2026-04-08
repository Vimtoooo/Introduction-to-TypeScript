// Create the InventoryItem interface and the required objects:
interface InventoryItem<T> {
    id: number;
    quantity: number;
    details: T;
};

// Objects to use with the interface:
const bookItem: InventoryItem<{ title: string; author: string }> = {
    id: 1,
    quantity: 5,
    details: { title: "TypeScript Guide", author: "John Doe" }
};

const electronicItem: InventoryItem<{ brand: string; model: string }> = {
    id: 2,
    quantity: 3,
    details: { brand: "TechCorp", model: "X200" }
};

const clothingItem: InventoryItem<{ size: string; color: string }> = {
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

// Inventory Arrays:
const bookInventory: InventoryItem<{ title: string; author: string }>[] = [bookItem];
const electronicInventory: InventoryItem<{ brand: string; model: string }>[] = [electronicItem];
const clothingInventory: InventoryItem<{ size: string; color: string }>[] = [];

const mixedBookInventory: InventoryItem<{ title: string; author: string }>[] = [
    { id: 10, quantity: 3, details: {title: "JavaScript Basics", author: "Alice Brown"} },
    { id: 11, quantity: 7, details: {title: "React Fundamentals", author: "Bob Wilson"} },
    { id: 12, quantity: 2, details: {title: "Node.js Guide", author: "Carol Davis"} }
];

const mixedElectronicInventory: InventoryItem<{ brand: string; model: string }>[] = [
    { id: 20, quantity: 5, details: {brand: "Samsung", model: "Galaxy S23"} },
    { id: 21, quantity: 1, details: {brand: "Apple", model: "iPhone 15"} }
];

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

// Print the required outputs
console.log(findItemById(mixedBookInventory, 11)?.details.title);
console.log(findItemById(mixedElectronicInventory, 20)?.details.brand);
console.log(findItemById(mixedBookInventory, 99));
console.log(findItemById(mixedBookInventory, 12)?.quantity);
console.log(findItemById(mixedElectronicInventory, 21)?.details.model);
console.log(findItemById(mixedBookInventory, 10)?.id);
console.log(findItemById(mixedElectronicInventory, 50));