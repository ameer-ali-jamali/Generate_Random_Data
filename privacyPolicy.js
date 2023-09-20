const mongoose = require("mongoose");
const faker = require("faker");

function generateRandomPrivacyPolicy() {
    const privacyPolicy = {
        content: faker.lorem.paragraphs(5), // Generates a random Lorem Ipsum text with 5 paragraphs
        isActive: true,
    };

    return privacyPolicy;
}

// Usage example:
const randomPrivacyPolicy = generateRandomPrivacyPolicy();
console.log(randomPrivacyPolicy);
