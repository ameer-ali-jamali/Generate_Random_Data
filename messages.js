const mongoose = require("mongoose");
const faker = require("faker");

function generateRandomMessage() {
    const message = {
        sentBy: mongoose.Types.ObjectId(), // Generate a random ObjectId for sentBy
        sentTo: mongoose.Types.ObjectId(), // Generate a random ObjectId for sentTo
        sentToModelType: faker.random.arrayElement(["User", "Business"]),
        sentByModelType: faker.random.arrayElement(["User", "Business"]),
        message: faker.lorem.sentence(),
        date: faker.date.recent().getTime(),
        files: [faker.random.image(), faker.random.image()], // Generate random file URLs
        fileType: faker.random.arrayElement(["image", "document", "audio"]),
        archived: faker.random.boolean(),
    };

    return message;
}

// Usage example:
const randomMessage = generateRandomMessage();
console.log(randomMessage);
