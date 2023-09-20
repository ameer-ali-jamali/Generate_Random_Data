const mongoose = require("mongoose");
const faker = require("faker");

function generateRandomCoordinates() {
    // Generate random latitude and longitude coordinates
    return [faker.address.latitude(), faker.address.longitude()];
}

function generateRandomLocation() {
    return {
        type: "Point",
        coordinates: generateRandomCoordinates(),
        address: faker.address.streetAddress(),
    };
}

function generateRandomJourney() {
    const journey = {
        userId: mongoose.Types.ObjectId(), // Generate a random ObjectId for userId
        to: generateRandomLocation(),
        from: generateRandomLocation(),
        radius: faker.random.word(),
        encodedPath: faker.random.alphaNumeric(20),
        status: faker.random.arrayElement(["START", "COMPLETE"]),
        stops: [mongoose.Types.ObjectId(), mongoose.Types.ObjectId()], // Generate random ObjectIds for stops
        category: [
            {
                parentId: mongoose.Types.ObjectId(), // Generate a random ObjectId for parentId
                subCategoryId: [mongoose.Types.ObjectId()], // Generate random ObjectIds for subCategoryId
            },
        ],
        distance: faker.random.number(),
        duration: faker.random.number(),
        isActive: faker.random.boolean(),
    };

    return journey;
}

// Usage example:
const randomJourney = generateRandomJourney();
console.log(randomJourney);
