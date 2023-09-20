const mongoose = require("mongoose");
const faker = require("faker");

// Assuming you have models for "User," "Business," and "Pin" defined elsewhere

function generateRandomBucketItem() {
    // Generate a random item type ("Business" or "Pin")
    const itemType = faker.random.arrayElement(["Business", "Pin"]);

    const bucketItem = {
        item: mongoose.Types.ObjectId(), // Generate a random ObjectId
        itemType: itemType,
        userId: mongoose.Types.ObjectId(), // Generate a random ObjectId
    };

    // Depending on the itemType, set the appropriate reference field
    if (itemType === "Business") {
        bucketItem.businessId = mongoose.Types.ObjectId(); // Generate a random ObjectId for Business
    } else if (itemType === "Pin") {
        // You can handle the Pin reference field here if needed
        // bucketItem.pinId = mongoose.Types.ObjectId(); // Generate a random ObjectId for Pin
    }

    return bucketItem;
}

// Usage example:
const randomBucketItem = generateRandomBucketItem();
console.log(randomBucketItem);
