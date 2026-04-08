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

// Print the required outputs
console.log(bookItem.id);
console.log(bookItem.quantity);
console.log(bookItem.details.title);
console.log(bookItem.details.author);
console.log(electronicItem.details.brand);
console.log(electronicItem.details.model);
console.log(clothingItem.details.size);
console.log(clothingItem.details.color);