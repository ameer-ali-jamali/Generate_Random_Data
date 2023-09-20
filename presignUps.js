const mongoose = require("mongoose");
const faker = require("faker");

function generateRandomPresignup() {
    const presignup = {
        name: faker.name.findName(),
        email: faker.internet.email(),
        usertype: faker.random.arrayElement(["USER", "BUSINESS"]),
        date: faker.date.past().getTime(),
        isActive: true,
    };

    return presignup;
}

// Usage example:
const randomPresignup = generateRandomPresignup();
console.log(randomPresignup);
