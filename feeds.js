const mongoose = require("mongoose");
const faker = require("faker");

function generateRandomFeed() {
    const feed = {
        userId: mongoose.Types.ObjectId(), // Generate a random ObjectId for userId
        userType: faker.random.arrayElement(["Business", "User"]),
        activityId: mongoose.Types.ObjectId(), // Generate a random ObjectId for activityId
        activityType: faker.random.arrayElement(["Follow", "Review", "Friend", "Advertisement"]),
        date: faker.date.past().getTime(), // Generate a random past date in milliseconds
    };

    return feed;
}

// Usage example:
const randomFeed = generateRandomFeed();
console.log(randomFeed);
