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

// Generic Function:
function addItem<T>(inventory: InventoryItem<T>[], newItem: InventoryItem<T>): InventoryItem<T>[] {
    inventory.push(newItem);
    return inventory;
};

// Executing functions:
const updatedBookInventory: InventoryItem<{ title: string; author: string }>[] = addItem(bookInventory, newBook);
const updatedElectronicInventory: InventoryItem<{ brand: string; model: string }>[] = addItem(electronicInventory, newElectronic);

// Print the required outputs
console.log(updatedBookInventory.length);
console.log(updatedBookInventory[1]?.details.title);
console.log(updatedBookInventory[1]?.details.author);
console.log(updatedElectronicInventory.length);
console.log(updatedElectronicInventory[1]?.details.brand);
console.log(updatedElectronicInventory[1]?.details.model);
console.log(updatedElectronicInventory[0]?.id);
console.log(updatedElectronicInventory[1]?.quantity);