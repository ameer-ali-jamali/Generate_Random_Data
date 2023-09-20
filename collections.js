const mongoose = require("mongoose");
const faker = require("faker");

function generateRandomCollection() {
    const collection = {
        name: faker.lorem.words(),
        items: [],
        userId: mongoose.Types.ObjectId(), // Generate a random ObjectId for userId
        businessId: mongoose.Types.ObjectId(), // Generate a random ObjectId for businessId
    };

    // Generate random items in the collection
    const itemCount = faker.random.number({ min: 1, max: 10 });
    for (let i = 0; i < itemCount; i++) {
        const itemType = faker.random.arrayElement(["Business", "Pin"]);
        const item = {
            item: mongoose.Types.ObjectId(), // Generate a random ObjectId for item
            itemType: itemType,
        };
        collection.items.push(item);
    }

    return collection;
}

// Usage example:
const randomCollection = generateRandomCollection();
console.log(randomCollection);
