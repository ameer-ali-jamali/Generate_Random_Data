const mongoose = require("mongoose");
const faker = require("faker");

function generateRandomNotification() {
    const notification = {
        senderId: mongoose.Types.ObjectId(), // Generate a random ObjectId for senderId
        senderType: faker.random.arrayElement(["Business", "User"]),
        recipientId: mongoose.Types.ObjectId(), // Generate a random ObjectId for recipientId
        recipientType: faker.random.arrayElement(["Business", "User"]),
        message: faker.lorem.sentence(),
        content: faker.lorem.sentence(),
        contentType: faker.random.arrayElement(["Follow", "Friend", "Review", "Pin", "Recommendation", "Comment"]),
        notificationType: faker.random.arrayElement(["SHARE", "MESSAGE", "INVITE", "FOLLOW", "REVIEW", "REQUEST", "REQUEST_RECOMMENDATION", "COMMENT"]),
        date: faker.date.recent().getTime(),
        isSeen: faker.random.boolean(),
        isLike: faker.random.boolean(),
    };

    return notification;
}

// Usage example:
const randomNotification = generateRandomNotification();
console.log(randomNotification);
