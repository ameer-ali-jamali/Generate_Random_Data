const mongoose = require('mongoose');
const faker = require('faker');

mongoose.connect('mongodb://localhost:27017/your_database', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define the schema and model
const SavedNotificationSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            default: '',
        },
        message: {
            type: String,
            default: '',
        },
        usertype: {
            type: String,
            enum: ['USER', 'BUSINESS'],
            required: true,
        },
        subscriptionId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Subscription',
        },
    },
    {
        timestamps: true,
        strict: true,
    }
);

const SavedNotification = mongoose.model(
    'SavedNotification',
    SavedNotificationSchema
);

// Function to generate random data for SavedNotification
const generateRandomSavedNotifications = async (count) => {
    const savedNotifications = [];

    for (let i = 0; i < count; i++) {
        const randomTitle = faker.lorem.sentence();
        const randomMessage = faker.lorem.paragraph();
        const randomUsertype = faker.random.arrayElement(['USER', 'BUSINESS']);
        const randomSubscriptionId = new mongoose.Types.ObjectId();

        const savedNotification = {
            title: randomTitle,
            message: randomMessage,
            usertype: randomUsertype,
            subscriptionId: randomSubscriptionId,
        };

        savedNotifications.push(savedNotification);
    }

    try {
        await SavedNotification.insertMany(savedNotifications);
        console.log(`${count} SavedNotification documents inserted into MongoDB`);
    } catch (error) {
        console.error('Error inserting SavedNotification documents:', error);
    } finally {
        mongoose.connection.close();
    }
};

// Call the function to generate and save random data (e.g., 100 documents)
generateRandomSavedNotifications(100);
