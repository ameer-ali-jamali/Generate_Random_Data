const faker = require("faker"); // You can use the Faker library to generate random data

function generateRandomBenefit() {
    const benefit = {
        name: faker.lorem.words(),
        isActive: faker.random.boolean(),
    };

    return benefit;
}

// Usage example:
const randomBenefit = generateRandomBenefit();
console.log(randomBenefit);
