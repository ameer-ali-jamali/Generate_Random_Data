const mongoose = require('mongoose');
const faker = require('faker');

mongoose.connect('mongodb://localhost:27017/your_database', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define the schema and model
const SubscriptionSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            default: '',
        },
        price: {
            type: Number,
        },
        duration: {
            type: Number, // in months
            default: 1,
        },
        type: {
            type: String,
            enum: ['USER', 'BUSINESS'],
        },
        isActive: {
            type: Boolean,
            default: true,
        },
        isPrice: {
            type: Boolean,
            default: true,
        },
        stripeMembershipId: {
            type: String,
        },
        subscriptionIdStripe: {
            type: String,
        },
        isChatUsers: {
            type: Boolean,
        },
        isChatBusiness: {
            type: Boolean,
        },
        isRemoveAdverts: {
            type: Boolean,
        },
        isAppearMore: {
            type: Boolean,
        },
        isPageCustomizable: {
            type: Boolean,
        },
        isShowOffers: {
            type: Boolean,
        },
        isFreeAdverts: {
            type: Boolean,
        },
        isReviewAllowed: {
            type: Boolean,
        },
        isSurveysAllowed: {
            type: Boolean,
        },
        tier: {
            type: Number,
        },
    },
    {
        timestamps: true,
        strict: true,
    }
);

const Subscription = mongoose.model('Subscription', SubscriptionSchema);

// Function to generate random data for Subscription
const generateRandomSubscriptions = async (count) => {
    const subscriptions = [];

    for (let i = 0; i < count; i++) {
        const randomName = faker.company.companyName();
        const randomDescription = faker.lorem.sentence();
        const randomPrice = faker.random.number({ min: 1, max: 1000 });
        const randomType = faker.random.arrayElement(['USER', 'BUSINESS']);
        const randomIsActive = faker.random.boolean();
        const randomIsPrice = faker.random.boolean();
        const randomStripeMembershipId = faker.random.uuid();
        const randomSubscriptionIdStripe = faker.random.uuid();
        const randomIsChatUsers = faker.random.boolean();
        const randomIsChatBusiness = faker.random.boolean();
        const randomIsRemoveAdverts = faker.random.boolean();
        const randomIsAppearMore = faker.random.boolean();
        const randomIsPageCustomizable = faker.random.boolean();
        const randomIsShowOffers = faker.random.boolean();
        const randomIsFreeAdverts = faker.random.boolean();
        const randomIsReviewAllowed = faker.random.boolean();
        const randomIsSurveysAllowed = faker.random.boolean();
        const randomTier = faker.random.number({ min: 1, max: 5 });

        const subscription = {
            name: randomName,
            description: randomDescription,
            price: randomPrice,
            type: randomType,
            isActive: randomIsActive,
            isPrice: randomIsPrice,
            stripeMembershipId: randomStripeMembershipId,
            subscriptionIdStripe: randomSubscriptionIdStripe,
            isChatUsers: randomIsChatUsers,
            isChatBusiness: randomIsChatBusiness,
            isRemoveAdverts: randomIsRemoveAdverts,
            isAppearMore: randomIsAppearMore,
            isPageCustomizable: randomIsPageCustomizable,
            isShowOffers: randomIsShowOffers,
            isFreeAdverts: randomIsFreeAdverts,
            isReviewAllowed: randomIsReviewAllowed,
            isSurveysAllowed: randomIsSurveysAllowed,
            tier: randomTier,
        };

        subscriptions.push(subscription);
    }

    try {
        await Subscription.insertMany(subscriptions);
        console.log(`${count} Subscription documents inserted into MongoDB`);
    } catch (error) {
        console.error('Error inserting Subscription documents:', error);
    } finally {
        mongoose.connection.close();
    }
};

// Call the function to generate and save random data (e.g., 100 documents)
generateRandomSubscriptions(100);
