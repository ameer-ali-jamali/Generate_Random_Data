const mongoose = require("mongoose");
const faker = require("faker");

function generateRandomFriends() {
    const friends = {
        requesterId: mongoose.Types.ObjectId(), // Generate a random ObjectId for requesterId
        receiverId: mongoose.Types.ObjectId(), // Generate a random ObjectId for receiverId
        requesterModelType: faker.random.arrayElement(["User", "Business"]),
        receiverModelType: faker.random.arrayElement(["User", "Business"]),
        status: faker.random.arrayElement(["ACCEPT", "REJECT", "PENDING", "UNFRIEND"]),
        isFriend: faker.random.boolean(),
    };

    return friends;
}

// Usage example:
const randomFriends = generateRandomFriends();
console.log(randomFriends);
