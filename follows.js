const mongoose = require("mongoose");
const faker = require("faker");

function generateRandomFollow() {
    const follow = {
        followerId: mongoose.Types.ObjectId(), // Generate a random ObjectId for followerId
        followeeId: mongoose.Types.ObjectId(), // Generate a random ObjectId for followeeId
        followerModelType: faker.random.arrayElement(["User", "Business"]),
        followeeModelType: faker.random.arrayElement(["User", "Business"]),
        isFollow: faker.random.boolean(),
    };

    return follow;
}

// Usage example:
const randomFollow = generateRandomFollow();
console.log(randomFollow);
