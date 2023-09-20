const mongoose = require("mongoose");
const faker = require("faker");

function generateRandomFAQ() {
    const faq = {
        question: faker.lorem.sentence(),
        answer: faker.lorem.paragraph(),
        isActive: faker.random.boolean(),
    };

    return faq;
}

// Usage example:
const randomFAQ = generateRandomFAQ();
console.log(randomFAQ);
