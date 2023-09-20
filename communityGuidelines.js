const mongoose = require("mongoose");
const faker = require("faker");

function generateRandomCommunityGuideline() {
    const communityGuideline = {
        content: faker.lorem.paragraph(),
        isActive: faker.random.boolean(),
    };

    return communityGuideline;
}

// Usage example:
const randomCommunityGuideline = generateRandomCommunityGuideline();
console.log(randomCommunityGuideline);
