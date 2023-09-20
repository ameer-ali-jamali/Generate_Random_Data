const faker = require("faker"); // You can use the Faker library to generate random data

function generateRandomAdvertisement() {
    const advertisement = {
        title: faker.lorem.words(),
        businessId: mongoose.Types.ObjectId(), // Generate a random ObjectId
        banner: faker.image.imageUrl(),
        targetAudienceMinAge: faker.random.number({ min: 18, max: 65 }),
        targetAudienceMaxAge: faker.random.number({ min: 18, max: 65 }),
        location: {
            type: "Point", // Assuming you're using geospatial data
            coordinates: [faker.address.longitude(), faker.address.latitude()],
        },
        radius: faker.random.number({ min: 1, max: 100 }),
        startDate: faker.date.future(),
        endDate: faker.date.future(),
        estimatedReachMinPerDay: faker.random.number({ min: 100, max: 1000 }),
        estimatedReachMaxPerDay: faker.random.number({ min: 1000, max: 5000 }),
        estimatedReachMinTotal: faker.random.number({ min: 10000, max: 50000 }),
        estimatedReachMaxTotal: faker.random.number({ min: 50000, max: 100000 }),
        price: faker.random.number({ min: 10, max: 1000 }),
        isPaid: faker.random.boolean(),
        paymentId: faker.random.alphaNumeric(12),
        address: faker.address.streetAddress(),
        isActive: faker.random.boolean(),
    };

    return advertisement;
}

// Usage example:
const randomAdvertisement = generateRandomAdvertisement();
console.log(randomAdvertisement);
