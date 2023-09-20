const mongoose = require("mongoose");
const faker = require("faker");

function generateRandomDiscount() {
    const discount = {
        title: faker.lorem.words(),
        description: faker.lorem.paragraph(),
        code: faker.random.alphaNumeric(10),
        businessId: mongoose.Types.ObjectId(), // Generate a random ObjectId for businessId
        startDate: faker.date.future(),
        endDate: faker.date.future(),
        isActive: faker.random.boolean(),
    };

    return discount;
}

// Usage example:
const randomDiscount = generateRandomDiscount();
console.log(randomDiscount);
