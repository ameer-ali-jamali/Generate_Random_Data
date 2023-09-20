const mongoose = require("mongoose");
const faker = require("faker");
const moment = require("moment");
const bcrypt = require("bcrypt");

async function generateRandomBusiness() {
    const password = await bcrypt.hash(faker.internet.password(), 10); // Generate a random hashed password

    const business = {
        name: faker.company.companyName(),
        email: faker.internet.email(),
        password: password,
        profilePic: faker.image.imageUrl(),
        googleId: faker.random.alphaNumeric(20),
        facebookId: faker.random.alphaNumeric(20),
        fcm_token: faker.random.uuid(),
        location: {
            type: "Point", // Assuming you're using geospatial data
            coordinates: [faker.address.longitude(), faker.address.latitude()],
        },
        address: faker.address.streetAddress(),
        isPublic: faker.random.boolean(),
        isloggedIn: faker.random.boolean(),
        bio: faker.lorem.paragraph(),
        followersCount: faker.random.number(),
        followingCount: faker.random.number(),
        reviewsCount: faker.random.number(),
        ratingCount: faker.random.number(),
        pricingCount: faker.random.number(),
        pricingAverage: faker.random.number({ min: 1, max: 5, precision: 0.1 }),
        ratingAverage: faker.random.number({ min: 1, max: 5, precision: 0.1 }),
        verificationStatus: faker.random.arrayElement(["PENDING", "APPROVED", "DENIED"]),
        stripeCustomerId: faker.random.alphaNumeric(16),
        deviceId: faker.random.alphaNumeric(16),
        isActive: faker.random.boolean(),
        isPrivate: faker.random.boolean(),
        isDelete: faker.random.boolean(),
        profileSetup: faker.random.boolean(),
        subscriptionSetup: faker.random.boolean(),
    };

    // Generate random category data
    const categoryCount = faker.random.number({ min: 1, max: 5 });
    business.category = [];
    for (let i = 0; i < categoryCount; i++) {
        business.category.push({
            parentId: mongoose.Types.ObjectId(),
            subCategoryId: [mongoose.Types.ObjectId()],
        });
    }

    // Generate random opening hours data
    business.openingHours = [];
    for (let day = 0; day < 7; day++) {
        business.openingHours.push({
            day: day,
            from: {
                hour: faker.random.number({ min: 0, max: 23 }),
                minute: faker.random.number({ min: 0, max: 59 }),
            },
            to: {
                hour: faker.random.number({ min: 0, max: 23 }),
                minute: faker.random.number({ min: 0, max: 59 }),
            },
        });
    }

    // Generate random album data
    const albumCount = faker.random.number({ min: 1, max: 10 });
    business.album = [];
    for (let i = 0; i < albumCount; i++) {
        business.album.push(faker.image.imageUrl());
    }

    return business;
}

// Usage example:
async function main() {
    const randomBusiness = await generateRandomBusiness();
    console.log(randomBusiness);
}

main();
