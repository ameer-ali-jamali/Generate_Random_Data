const mongoose = require("mongoose");
const faker = require("faker");

function generateRandomRecommendation() {
    const recommendation = {
        recommendationText: faker.lorem.sentence(), // Generates a random sentence
        user: mongoose.Types.ObjectId(), // Generates a random ObjectId for the user
        friendTags: [mongoose.Types.ObjectId(), mongoose.Types.ObjectId()], // Generates an array of random ObjectIds for friend tags
    };

    return recommendation;
}

// Usage example:
const randomRecommendation = generateRandomRecommendation();
console.log(randomRecommendation);
