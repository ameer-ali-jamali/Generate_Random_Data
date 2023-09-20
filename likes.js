const mongoose = require("mongoose");
const faker = require("faker");

function generateRandomLikes() {
    const likes = {
        reviewId: mongoose.Types.ObjectId(), // Generate a random ObjectId for reviewId
        userId: mongoose.Types.ObjectId(), // Generate a random ObjectId for userId
        userType: faker.random.arrayElement(["Business", "User"]),
        isLike: faker.random.boolean(),
        isActive: faker.random.boolean(),
    };

    return likes;
}

// Usage example:
const randomLikes = generateRandomLikes();
console.log(randomLikes);
