const mongoose = require("mongoose");
const faker = require("faker");

function generateRandomPin() {
    const pin = {
        name: faker.company.companyName(),
        address: faker.address.streetAddress(),
        userId: mongoose.Types.ObjectId(), // Generate a random ObjectId for userId
        location: {
            type: "Point",
            coordinates: [faker.address.longitude(), faker.address.latitude()],
        },
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
        website: faker.internet.url(),
        openingHours: Array.from({ length: 7 }, () => ({
            day: faker.datatype.number({ min: 0, max: 6 }),
            from: {
                hour: faker.datatype.number({ min: 0, max: 23 }),
                minute: faker.datatype.number({ min: 0, max: 59 }),
            },
            to: {
                hour: faker.datatype.number({ min: 0, max: 23 }),
                minute: faker.datatype.number({ min: 0, max: 59 }),
            },
        })),
        additionalDetails: faker.lorem.paragraph(),
        reviewsCount: faker.datatype.number({ min: 0, max: 100 }),
        ratingCount: faker.datatype.number({ min: 0, max: 5 }),
        pricingCount: faker.datatype.number({ min: 0, max: 5 }),
        pricingAverage: faker.datatype.float({ min: 1, max: 5, precision: 0.1 }),
        ratingAverage: faker.datatype.float({ min: 1, max: 5, precision: 0.1 }),
        category: Array.from({ length: 3 }, () => ({
            parentId: mongoose.Types.ObjectId(), // Generate random ObjectId for parentId
            subCategoryId: [mongoose.Types.ObjectId()], // Generate random ObjectId for subCategoryId
        })),
        isPrivate: faker.datatype.boolean(),
        isActive: true,
    };

    return pin;
}

// Usage example:
const randomPin = generateRandomPin();
console.log(randomPin);
