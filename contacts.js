const mongoose = require("mongoose");
const faker = require("faker");

function generateRandomContact() {
    const contact = {
        userId: mongoose.Types.ObjectId(), // Generate a random ObjectId for userId
        businessId: mongoose.Types.ObjectId(), // Generate a random ObjectId for businessId
        name: faker.name.findName(),
        email: faker.internet.email(),
        message: faker.lorem.paragraph(),
        services: faker.random.word(),
    };

    return contact;
}

// Usage example:
const randomContact = generateRandomContact();
console.log(randomContact);
