const faker = require('faker');

// Define the number of random records you want to generate
const numberOfRecords = 10;

// Create a loop to generate random data
for (let i = 0; i < numberOfRecords; i++) {
    const randomName = faker.name.findName(); // Generate a random name
    const randomEmail = faker.internet.email(); // Generate a random email address

    // Output the generated data
    console.log(`Name: ${randomName}, Email: ${randomEmail}`);
}
