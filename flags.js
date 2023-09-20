const mongoose = require("mongoose");
const faker = require("faker");

function generateRandomFlag() {
    const flag = {
        name: faker.lorem.word(),
        isActive: faker.random.boolean(),
    };

    return flag;
}

// Usage example:
const randomFlag = generateRandomFlag();
console.log(randomFlag);
