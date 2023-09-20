const mongoose = require('mongoose');
const faker = require('faker');

mongoose.connect('mongodb://localhost:27017/your_database', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define the schema and model
const UserSubscriptionSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        businessId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Business',
        },
        subscriptionId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Subscription',
        },
        subscriptionIdStripe: {
            type: String,
        },
        paymentId: {
            type: String,
        },
        isCancelled: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
        strict: true,
    }
);

const UserSubscription = mongoose.model('UserSubscription', UserSubscriptionSchema);

// Function to generate random data for UserSubscription
const generateRandomUserSubscriptions = async (count) => {
    const userSubscriptions = [];

    for (let i = 0; i < count; i++) {
        const randomUserId = new mongoose.Types.ObjectId();
        const randomBusinessId = new mongoose.Types.ObjectId();
        const randomSubscriptionId = new mongoose.Types.ObjectId();
        const randomSubscriptionIdStripe = faker.random.uuid();
        const randomPaymentId = faker.random.uuid();
        const randomIsCancelled = faker.random.boolean();

        const userSubscription = {
            userId: randomUserId,
            businessId: randomBusinessId,
            subscriptionId: randomSubscriptionId,
            subscriptionIdStripe: randomSubscriptionIdStripe,
            paymentId: randomPaymentId,
            isCancelled: randomIsCancelled,
        };

        userSubscriptions.push(userSubscription);
    }

    try {
        await UserSubscription.insertMany(userSubscriptions);
        console.log(`${count} UserSubscription documents inserted into MongoDB`);
    } catch (error) {
        console.error('Error inserting UserSubscription documents:', error);
    } finally {
        mongoose.connection.close();
    }
};

// Call the function to generate and save random data (e.g., 100 documents)
generateRandomUserSubscriptions(100);
